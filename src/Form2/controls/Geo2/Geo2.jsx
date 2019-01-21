import React, { Component } from 'react';
import Marker from 'react-icons2/md/room';
import autobind from 'core-decorators/lib/autobind';
import GoogleMapReact from 'google-map-react';
// import { Icon } from './Geo2.styles';

class Geo2 extends Component {
  constructor(props) {
    super(props);
    const val = props.field.value || [59.95, 30.33];
    // props.field.value[0];
    // props.field.value[0];
    this.state = {
      zoom: 9,
      lat: val[1],
      lng: val[0],
    };
  }

  // @autobind
  // onCircleInteraction(childKey, childProps, mouse) {
  //   this.setState({
  //     draggable: false,
  //     lat: mouse.lat,
  //     lng: mouse.lng,
  //   });
  //   console.log('onCircleInteraction called with', childProps);
  // }

  // @autobind
  // onCircleInteraction3(childKey, childProps) {
  //   this.setState({ draggable: true });
  //   console.log('onCircleInteraction called with', childProps);
  // }

  @autobind
  onChange({ center, zoom }) {
    const {
      field, form,
    } = this.props;
    form.setFieldValue(field.name, [center.lng, center.lat]);
    // console.log('onChange', center, zoom);

    this.setState({
      center,
      zoom,
    });
  }

  render() {
    // const { height, width, apiKey, ...props } = this.props;
    const {
      field, form, height = 300, width = '100%', apiKey, ...props
    } = this.props;
    return (
      <div style={{ height, width }}>
        <GoogleMapReact
          // {...this.field}
          // {...props}
          // style={{ height: '100vh', width: 100 }}

          bootstrapURLKeys={apiKey}
          // defaultCenter={this.props.center}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          // defaultZoom={this.props.zoom}
          draggable={this.state.draggable}
          onChange={this.onChange}
          center={this.state.center}
          zoom={this.state.zoom}
          // onChildMouseDown={this.onCircleInteraction}
          // onChildMouseUp={this.onCircleInteraction3}
          // onChildMouseMove={this.onCircleInteraction}
          // onChildClick={() => console.log('child click')}
          // onClick={() => console.log('mapClick')}
        >
          <div
            className="place"
          >
            <Marker />
            {/* <Icon>
              <Marker />
            </Icon> */}
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Geo2;


// const {
//   field, form, height = 300, width = 300, apiKey, ...props
// } = this.props;
// return (
//   <div style={{ height, width }}>
//     <GoogleMapReact
//       // {...this.field}
//       // {...props}
//       // style={{ height: '100vh', width: 100 }}

//       bootstrapURLKeys={apiKey}
//       defaultCenter={this.props.center}
//       defaultCenter={{
//         lat: 59.95,
//         lng: 30.33,
//       }}
//       defaultZoom={this.props.zoom}

//       draggable={this.state.draggable}
//       onChange={this.onChange}
//       // center={this.state.center}
//       // zoom={this.state.zoom}
//       onChildMouseDown={this.onCircleInteraction}
//       onChildMouseUp={this.onCircleInteraction3}
//       onChildMouseMove={this.onCircleInteraction}
//       onChildClick={() => console.log('child click')}
//       onClick={() => console.log('mapClick')}
//     >
//       <div
//         className="place"
//       >
//         <Marker />
//         {/* <Icon>
//           <Marker />
//         </Icon> */}
//       </div>
//     </GoogleMapReact>
//   </div>
// );

