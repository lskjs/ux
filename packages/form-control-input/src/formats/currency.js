import CurrencyFormat from 'react-currency-format';

export function currency({ form, field }) {
  return {
    componentClass: CurrencyFormat,
    thousandSeparator: true,
    decimalSeparator: '.',
    onBlur: () => {
      const value = parseFloat(field.value.replace(/[^\w.?]+/g, ''));
      form.setFieldValue(field.name, value);
    },
  };
}

export default currency;
