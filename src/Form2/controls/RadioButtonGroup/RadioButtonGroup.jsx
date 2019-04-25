import React, { PureComponent } from 'react';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import ButtonGroup from '../../../Button/ButtonGroup';
import Button from '../../../Button/Button';
import Bool from '../Checkbox/Bool';

class RadioButtonGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
    })),
    value: PropTypes.string,
    paint: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    options: [],
    value: null,
    paint: 'primary',
    onChange: () => {},
  }

  state = {
    show: '',
  }

  @autobind
  onChange(value) {
    const { onChange } = this.props;
    this.setState({ show: value });
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const {
      options,
      value,
      paint,
      ...props
    } = this.props;
    return (
      <ButtonGroup panel {...omit(props, ['onChange'])}>
        {options.map(item => (
          <Button
            paint={this.state.show === item.value ? paint : 'default'}
            onClick={() => {
              this.onChange(item.value);
            }}
          >
            {item.title}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}

export default props => <Bool {...props} componentClass={RadioButtonGroup} />;
