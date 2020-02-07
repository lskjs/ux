export const rem = num => `${num}rem`;
export const value = num => parseInt(num, 10);
export const unit = str => (typeof str === 'string' ? str.substr(value(str).toString().length) : 'px');
export const multy = (base, x) => `${value(base) * x}${unit(base)}`;
