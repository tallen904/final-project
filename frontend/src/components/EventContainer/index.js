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
  constructor(props){
    super(props);
    this.state = { event: {} };
  }

  // componentDidMount() {
  //   EventAPI.getEvent(this.props.eventId)
  //   .then(res => {
  //     console.log(res)
  //     this.setState({event: res.data})
  //   })
  // }

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
                
                <Map />
                <Info event={this.state.event}/>
              </div>
              <div className="events-item-content content-color  events-content-format">
                <Drivers drivers={['Kat', 'Kevin']} passengers={['Tanner', 'Justin', 'James']}/>
                <Waitlist />
              </div>
            </div>; //return <div className="events-container-desktop">
  }
}

export default EventContainer;
