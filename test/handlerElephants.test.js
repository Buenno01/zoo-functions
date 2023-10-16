const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined se nenhum parâmetro é definido', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna uma mensagem de erro quando o parâmetro não é string', () => {
    expect(typeof handlerElephants(123)).toBe('string');
    expect(typeof handlerElephants(['oi'])).toBe('string');
    expect(typeof handlerElephants({ teste: 'teste' })).toBe('string');
  });
  it('Retorna a quantidade de elefantes quando o paâmetro é count', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('Retorna o array esperado quando o parâmetro é names', () => {
    const actual = handlerElephants('names');
    const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    names.forEach((expected) => {
      expect(actual).toContain(expected);
    });
  });
  it('Retorna a localização quando parâmetro é location', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });
  it('Retorna a média de idades quando parâmetro é averageAge', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('Retorna nulo se pesquisado algum parâmetro inexistente', () => {
    const actual = handlerElephants('xablau');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
