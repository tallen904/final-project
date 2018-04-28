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
    console.log(this.props.eventId)

    return  <div className="events-container-desktop">
              <div className="events-item-title title-color events-title-container-desktop">
                <Title title={this.state.event.name} />
               
              </div>

                              <div className="events-item-title-left-spacer title-color"></div>
              <div className="events-item-title-right-spacer title-color"></div>
              <div className="events-item-title-bottom title-spacer-color"></div>

              <div className="events-left-spacer space-color"></div>
            <div className="events-right-spacer space-color"></div>

              <div className="events-item-sidebar events-content-formatevents-content-format content-color">
                <Info event={this.state.event}/>  
                <Map />
              </div>
              <div className="events-item-content content-color  events-content-format">
                <Drivers drivers={['Kat', 'Kevin']} passengers={['Tanner', 'Justin', 'James']}/>
                <Waitlist />
              </div>
            </div>; //return <div className="events-container-desktop">
  }
}

export default EventContainer;
