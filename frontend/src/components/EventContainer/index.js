import React, { Component } from "react";

import Calendar from "./Calendar";
import Decision from "./Decision";
import Drivers from "./Drivers";
import Info from "./Info";
import Map from "./Map";
import Share from "./Share";
import Title from "./Title";
import Waitlist from "./Waitlist";

import EventAPI from "../../utils/EventAPI";
import UserAPI from "../../utils/UserAPI";
import CarAPI from "../../utils/CarAPI";

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      users: [],
      driverId: "",
      passengers: [],
      lat: 0,
      lng: 0
    };
  }

  //for the events page
  componentDidMount() {
    //get event from db
    EventAPI.getEvent(this.props.eventId).then(res => {
      //based on response location, get the lat and lng for the address
      this.setState({
        event: res.data
      });
    });
  }

  render() {
    return (
      <div className="events-container-desktop">
        <div className="events-item-title title-color events-title-container-desktop">
          <Title title={this.state.event.name} />
        </div>

        <div className="events-item-title-left-spacer title-color" />
        <div className="events-item-title-right-spacer title-color" />
        <div className="events-item-title-bottom title-spacer-color" />

        <div className="events-left-spacer space-color" />
        <div className="events-right-spacer space-color" />
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
