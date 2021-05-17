import { withFormik } from 'formik';

import createCreateForm from './createForm/createCreateForm';
import onError from './createForm/onError';
import FormGroup from './FormGroup';
import OnChangeListener from './OnChangeListener';

export default createCreateForm({
  OnChangeListener,
  FormGroup,
  withFormik, // this.props.formik.unregisterField
  onError,
});

// Form.create({
//   View,
//   controls,
//   ....
// })

// ///

// const createForm = Form.createCreator({
//   // OnChangeListener,
//   withFormik,
//   onError,
//   inject: ['i18', 'some'],
// });

// const ViewForm = createForm({
//   View,
//   controls,
//   ....
// })

// ///

// const createForm = Form.createCreator({
//   withFormik,
//   inject: ['i18', 'some'],
// })({
//   View,
//   controls,
//   ....
// })
