import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import GoogleMapGeoPicker from 'react-geo-picker/lib/google-map';

class Geo extends Component {
  static defaultProps = {
    value: {
      latitude: 50.4547,
      longitude: 30.5238,
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
        <GoogleMapGeoPicker
          apiKey="AIzaSyDln0Gfickhxbp96Dgh1DyWqjrdhYo0fB0&callback=initMap"
          // apiKey="AIzaSyCC7deIQtJkJpBRf3r_TKq0UzYFzqJyJ-c"
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
