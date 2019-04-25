import React, { PureComponent } from 'react';
import omit from 'lodash/omit';
import { autobind } from '@lskjs/autobind';
import { PropTypes } from 'prop-types';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Button from '@lskjs/button';
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
