import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAwIze81UMw6T5ASTCAD0UWuMh3HlFY92o");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwIze81UMw6T5ASTCAD0UWuMh3HlFY92o&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`, width: '350px' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 32.8278001, lng: -117.1485465 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 32.8278001, lng: -117.1485465 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class Map extends React.Component {
  state = {
    isMarkerShown : false
  }

  componentDidMount() {
    this.delayedShowMarker()
    Geocode.fromAddress(this.props.event.location).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        updateLatLng(lat, lng)
      },
      error => {
        console.error(error);
      }
    )
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default Map;