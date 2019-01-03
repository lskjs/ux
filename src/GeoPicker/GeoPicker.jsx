import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import MapBox from 'react-geo-picker/lib/mapbox';
import GoogleMap from 'react-geo-picker/lib/google-map';
import 'react-geo-picker/es/google-map/index.css';
import './GeoPicker.css';

class Geo extends Component {
  static defaultProps = {
    value: {
      latitude: 37.871263,
      longitude: -122.268783,
    },
    type: 'google',
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  @autobind
  handleChange(value) {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const {
      defaultValue,
      type,
      ...props
    } = this.props;

    const GeoComponent = type === 'google' ? GoogleMap : MapBox;

    return (
      <div>
        <GeoComponent
          className="GeoStyle"
          defaultValue={defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}

export default Geo;
