import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from '@lskjs/autobind';

class VisibilityScroll extends PureComponent {
  static propTypes = {
    /** Содержимое */
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    show: PropTypes.bool,
    /** Указывает, когда нужно показать элемент */
    trigger: PropTypes.number,
  }

  static defaultProps = {
    children: null,
    show: false,
    trigger: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  componentDidMount() {
    if (__CLIENT__) {
      window.addEventListener('scroll', this.onScroll);
      this.onScroll();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { show } = this.props;
    if (show !== nextProps.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }

  componentWillUnmount() {
    if (__CLIENT__) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  @autobind
  onScroll() {
    const { trigger } = this.props;
    const { show } = this.state;
    const trg = trigger || Math.ceil(window.innerHeight / 2);
    if (!show && window.scrollY >= trg) {
      this.setState({ show: true });
    }
    if (show && window.scrollY < trg) {
      this.setState({ show: false });
    }
  }

  render() {
    const { show } = this.state;
    const { children } = this.props;
    if (!show) return false;
    return children;
  }
}

export default VisibilityScroll;
