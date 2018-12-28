import React, { Component } from 'react';
import MapboxGeoPicker from 'react-geo-picker/lib/mapbox';
// import GoogleMapGeoPicker from 'react-geo-picker/lib/google-map';

class Geo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 37.871263,
        longitude: -122.268783,
      },
    };
  }
  render() {
    return (
      <div>
        <MapboxGeoPicker
          apiKey="pk.eyJ1IjoibmF0YXZ0cyIsImEiOiJjanE4NmpsZmswMGpvNDJua293YXVrMmxiIn0.ydvNPvOMQalHl9h5oCSMbA"
          height={300}
          width={400}
          defaultValue={{
            latitude: 37.871263,
            longitude: -122.268783,
          }}
          value={this.state.location}
          onChange={location => this.setState({ location })}
        />
        latitude: {this.state.location.latitude}
        <br />
        longitude: {this.state.location.longitude}
      </div>
    );
  }
}

export default Geo;
