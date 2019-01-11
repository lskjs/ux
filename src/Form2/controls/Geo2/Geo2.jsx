import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [59.95, 30.33],
      zoom: 9,
      draggable: true,
      lat: 59.95,
      lng: 30.33,
    };
  }
  onCircleInteraction(childKey, childProps, mouse) {
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng,
    });
    console.log('onCircleInteraction called with', childProps);
  }

  onCircleInteraction3(childKey, childProps) {
    this.setState({ draggable: true });
    console.log('onCircleInteraction called with', childProps);
  }
  _onChange = ({ center, zoom }) => {
    this.setState({
      center,
      zoom,
    });
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // {...this.field}
          // {...this.props}
          draggable={this.state.draggable}
          onChange={this._onChange}
          center={this.state.center}
          zoom={this.state.zoom}
          onChildMouseDown={::this.onCircleInteraction}
          onChildMouseUp={::this.onCircleInteraction3}
          onChildMouseMove={::this.onCircleInteraction}
          onChildClick={() => console.log('child click')}
          onClick={() => console.log('mapClick')}
        >
          <div
            className="place"
            lat={this.state.lat}
            lng={this.state.lng}
          >
            MARKER
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
