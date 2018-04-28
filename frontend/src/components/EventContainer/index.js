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
      passengers: []
    };
  }

  componentDidMount() {
    EventAPI.getEvent(this.props.eventId).then(res => {
      this.setState({ event: res.data });
      CarAPI.getCar(this.state.event.car).then(res => {
        let driverId = res.data.driver;
        this.setState({ driverId });
      })
      UserAPI.getUsers().then(res => {
        let passengers = [];
        res.data.map(user => {
          user.events.map(event => {
            if(user._id === this.state.driverId){
              return
            }
            if (event === this.state.event._id) {
              passengers.push(user._id);
              return;
            }
          });
        });
        this.setState({ passengers });
      });
    });
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
