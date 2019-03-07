import { withFormik } from 'formik';
import createCreateForm from './createForm/createCreateForm';
import OnChangeListener from './OnChangeListener';
import onError from './createForm/onError';
import injectObserver from '../utils/injectObserver';

// export default injectObserver(['i18', 'config', 'user'])(createCreateForm({
//   // OnChangeListener,
//   withFormik,
//   onError,
// }));


export default () => null

// const createFormWithI18 = (callback) => {
//   if (!isFunction(callback)) {
//     return createForm(callback);
//   }

//   @inject('i18', 'config', 'user')
//   // @observer
//   class Component2 extends Component {
//     shouldComponentUpdate(nextProps) {
//       return !!(nextProps.hash && this.props.hash && nextProps.hash !== this.props.hash);
//     }
//     render() {
//       const {
//         i18, config, user, ...props
//       } = this.props;
//       const params = callback({ i18, config, user });
//       const Component3 = createForm(params);
//       // console.log('createFormWithI18', props);

//       return <Component3 i18={i18} config={config} user={user} {...props} />;
//     }
//   }

//   return Component2;
// };

// export default createFormWithI18;
