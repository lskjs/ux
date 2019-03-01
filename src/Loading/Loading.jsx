import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import T from '../T';
import LoaderIcon from './LoaderIcon';

const styles = {
  inner: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3000,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4a4a4a',
  },
  box: {
    color: '#4a4a4a',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    display: 'flex',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
  },
};

class Loading extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.any,
    icon: PropTypes.any,
    iconPath: PropTypes.string,
  }
  static defaultProps = {
    disabled: false,
    icon: <LoaderIcon />,
    iconPath: null,
    text: <T name="lskComponents.fullScreenLoader.loading" />,
  }
  render() {
    const {
      icon,
      iconPath,
      disabled,
      text,
    } = this.props;
    if (disabled) return false;
    let iconComponent = (
      <div style={styles.icon}>
        {icon}
      </div>
    );
    if (iconPath) {
      iconComponent = (
        <img
          alt=""
          src={iconPath}
          style={styles.icon}
        />
      );
    }
    return (
      <div style={styles.inner}>
        <div style={styles.box}>
          {iconComponent}
          <div style={styles.text}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
