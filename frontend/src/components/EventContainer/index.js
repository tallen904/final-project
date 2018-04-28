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


class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      lat: 0,
      lng: 0,
    }
  }

  //for the events page
  componentDidMount() {
    //get event from db
    EventAPI.getEvent(this.props.eventId).then(res => {
      //based on response location, get the lat and lng for the address
      this.setState({
        event : res.data,
      })
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
          <Map />
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
