import { PureComponent } from 'react';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';

class MediaQuery extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object,
  }

  static defaultProps = {
    match: {},
  }

  static prepareMediaValue(value) {
    let val = value;
    if (val === null || val === undefined) {
      val = false;
    }
    if (typeof value === 'number') {
      val = `${val}px`;
    }
    return val;
  }

  constructor(props) {
    super(props);
    this.state = {
      match: false,
    };
    this.mql = null;
    this.mediaListener = this.mediaListener.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (__CLIENT__) {
      const media = Object.keys(match)
        .map((e) => {
          const val = this.constructor.prepareMediaValue(match[e]);
          if (!val) return null;
          return `(${kebabCase(e)}: ${val})`;
        })
        .filter(e => !!e)
        .join(' and ');
      if (media) {
        this.mql = window.matchMedia(media);
        this.mql.addListener(this.mediaListener);
        this.mediaListener(this.mql);
      }
    }
  }

  componentWillUnmount() {
    if (__CLIENT__ && this.mql) {
      this.mql.removeListener(this.mediaListener);
    }
  }

  mediaListener(event) {
    const { matches: match } = event;
    this.setState({ match });
  }

  render() {
    const { match } = this.state;
    const { children } = this.props;
    if (!match) return false;
    return children;
  }
}

export default MediaQuery;
