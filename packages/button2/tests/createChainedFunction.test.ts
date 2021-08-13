import createChainedFunction from '../utils/createChainedFunction';

describe('createChainedFunction', () => {
  test('Вернёт null, если нет аргументов', () => {
    expect(createChainedFunction()).toEqual(null);
  });

  test('Вернёт ошибку типа, если передан неправильный тип', () => {
    expect(() => createChainedFunction({ heh: 'mda' } as any)).toThrowError(/Некорректный тип аргумента/);
  })

  test('Вернёт оригинальную функцию, если передана только одна функция', () => {
    const func1 = () => {};
    expect(createChainedFunction(func1)).toEqual(func1);
  });
});
