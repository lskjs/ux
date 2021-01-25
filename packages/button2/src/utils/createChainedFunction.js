/**
 * Безопасная chained функция
 *
 * Создаёт новую функцию только в случае необходимости,
 * в противном случае вернёт существующие функции или null.
 *
 * @param {function} функции для chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs
    .filter((f) => f != null)
    .reduce((acc, f) => {
      if (typeof f !== 'function') {
        throw new Error(
          'Некорректный тип аргумента, возможно передавать только функции, undefined или null.',
        );
      }

      if (acc === null) return f;

      return function chainedFunction(...args) {
        acc.apply(this, args);
        f.apply(this, args);
      };
    }, null);
}

export default createChainedFunction;
