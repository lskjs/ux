/**
 * Безопасная chained функция
 *
 * Создаёт новую функцию только в случае необходимости,
 * в противном случае вернёт существующие функции или null.
 *
 * @param {function} функции для chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs: any[]) {
  return funcs
    .filter((f: Function) => f != null)
    .reduce((acc, f) => {
      if (typeof f !== 'function') {
        throw new Error('Некорректный тип аргумента, возможно передавать только функции, undefined или null.');
      }

      if (acc === null) return f;

      return function chainedFunction(this: any, ...args: Function[]) {
        ((acc as unknown) as Function).apply(this, args);
        f.apply(this, args);
      };
    }, null);
}

export default createChainedFunction;
