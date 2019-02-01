const createNestedFormControl = Component => (props) => {
  const { form, field, ...otherProps } = props;
  const { value } = field;
  return (
    <Component
      {...otherProps}
      initialValues={value}
      onChange={(values) => {
        form.setFieldValue(field.name, values);
      }}
    />
  );
};
export default createNestedFormControl;
