import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Geocode from "react-geocode";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwIze81UMw6T5ASTCAD0UWuMh3HlFY92o&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`, width: '350px' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({isMarkerShown, handleMarkerClick, lat, lng}) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={(lat && lng) ? {lat: lat, lng: lng} : { lat: 32.8278001, lng: -117.1485465 }}
  >
    {isMarkerShown && <Marker position={{ lat: lat, lng: lng }} onClick={handleMarkerClick} />}
  </GoogleMap>
)

//return the map component defined above
const Map = ({ isMarkerShown, handleMarkerClick, lat, lng }) => {
  return (
    <MyMapComponent
      isMarkerShown={isMarkerShown}
      onMarkerClick={handleMarkerClick}
      lat={lat}
      lng={lng}
    />
  )
}

export default Map;