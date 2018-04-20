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
  state = {
    events: [],
  };


  componentDidMount() {
    EventAPI.getEvents()
    .then(res => {
      this.setState({events: res.data})
    })
  }


  render() {

    return  <div className="events-container-desktop">
              <div className="events-item-title">
                <Title />
               
              </div>

              <div className='events-item-decision'>
                 <Decision />
                <Share />
              </div>

              <div className="events-item-sidebar">
                
                <Map />
                <Info />
              </div>
              <div className="events-item-content">
                <Drivers />
                <Waitlist />
              </div>
            </div>; //return <div className="events-container-desktop">
  }
}

export default EventContainer;
