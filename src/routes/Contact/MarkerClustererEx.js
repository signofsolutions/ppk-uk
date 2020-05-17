import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div style={{background:"#fff", boxShadow:"2px 6px 8px 0px #fff", fontSize:"35px", padding:"10px", display:"inline"}}>{text}</div>;
function MarkerClustererExample (props) {
  return(
    <div style={{ height: '600px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBrQv_nXXlCbeKTLRXnXqYDETwgIIap4Y8' }}
      defaultCenter={{
        lat: 51.535318,
        lng: -0.645333
      }}
      defaultZoom={15}
    >
      <AnyReactComponent
        lat={51.535318}
        lng={-0.645333}
        text="PPPN"
      />
    </GoogleMapReact>
  </div>
  )
}
export default MarkerClustererExample;