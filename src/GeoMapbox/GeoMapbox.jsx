import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import MapboxGeoPicker from 'react-geo-picker/lib/mapbox';
// import GoogleMapGeoPicker from 'react-geo-picker/lib/google-map';

class Geo extends Component {
  static defaultProps = {
    value: {
      latitude: 37.871263,
      longitude: -122.268783,
    },
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
    } = this.props;
    return (
      <div>
        <MapboxGeoPicker
          apiKey="pk.eyJ1IjoibmF0YXZ0cyIsImEiOiJjanE4NmpsZmswMGpvNDJua293YXVrMmxiIn0.ydvNPvOMQalHl9h5oCSMbA"
          height={300}
          width={400}
          defaultValue={defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Geo;
