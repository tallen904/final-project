import  React, { Component } from "react";

import Calendar from "./Calendar";
import Decision from "./Decision";
import Drivers from "./Drivers";
import Info from "./Info";
import Map from "./Map";
import Share from "./Share";
import Title from "./Title";
import Waitlist from "./Waitlist";

import EventAPI from '../../utils/EventAPI'

import Geocode from "react-geocode";

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      lat: 0,
      lng: 0,
      isMarkerShown: false
    }
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick () {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  //for the events page
  componentDidMount() {
    this.delayedShowMarker()
    //get event from db
    EventAPI.getEvent(this.props.eventId).then(res => {
      //based on response location, get the lat and lng for the address
      return Geocode.fromAddress(res.data.location).then(response => {
        const { lat, lng } = response.results[0].geometry.location;
        //set the state based on event data and the lat and lng 
        this.setState({
          event : res.data,
          lat : lat,
          lng : lng,
          isMarkerShown : true
        })
      }, error => {
        console.error(error);
      });
    })
  }

  render() {
    return (
      <div className="events-container-desktop">
        <div className="events-item-title">
          <Title title={this.state.event.name} />
        </div>

        <div className="events-item-decision">
          <Decision />
          <Share />
        </div>

        <div className="events-item-sidebar">
          <Map 
            isMarkerShown={this.state.isMarkerShown}
            lat={this.state.lat}
            lng={this.state.lng}
            />
          <Info event={this.state.event} />
        </div>
        <div className="events-item-content">
          <Drivers
            drivers={["Kat", "Kevin"]}
            passengers={["Tanner", "Justin", "James"]}
          />
          <Waitlist />
        </div>
      </div>
    ); //return <div className="events-container-desktop">
  }
}

export default EventContainer;
