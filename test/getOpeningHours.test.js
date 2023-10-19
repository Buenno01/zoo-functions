const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna o objeto esperado quando nenhum parâmetro é passado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(typeof actual).toBe(typeof expected);
    expect(actual).toEqual(expected);
  });
  it('Retorna um erro quando a hora e/ou minuto não existe', () => {
    expect(() => {
      getOpeningHours('Tuesday', '13:00-PM');
    }).toThrow();

    expect(() => {
      getOpeningHours('Tuesday', '11:99-AM');
    }).toThrow();
  });
  it('Retorna um erro quando o parâmetro é escrito errado', () => {
    expect(() => {
      getOpeningHours('Tuesday', 'Oi:11-AM');
    }).toThrow();
    expect(() => {
      getOpeningHours('Tuesday', '11:Oi-AM');
    }).toThrow();
    const am = 'AM';
    const pm = 'PM';
    expect(() => {
      getOpeningHours('Tuesday', '11:11-XD');
    }).toThrowError(`The abbreviation must be '${am}' or '${pm}'`);
  });
  it('Retorna informações de horario do dia quando pesquisado', () => {
    const closed = 'The zoo is closed';
    const open = 'The zoo is open';
    expect(getOpeningHours('Monday', '9:00-AM')).toEqual(closed);
    expect(getOpeningHours('Friday', '3:00-PM')).toEqual(open);
    expect(getOpeningHours('Friday', '8:01-PM')).toEqual(closed);
    // expect(getOpeningHours('Friday', '12:00-PM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Saturday', '12:00-AM')).toEqual(closed);
  });
  it('Retorna erro se o nome do dia não existe', () => {
    expect(() => {
      getOpeningHours('Gustavinho', '9:00-AM');
    }).toThrow();
  });
});
