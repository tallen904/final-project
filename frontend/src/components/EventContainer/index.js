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
    this.state = { 
      event: {},
      lat : 0,
      lng : 0
    };
  }

  updateLatLng(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  componentDidMount() {
    EventAPI.getEvent(this.props.eventId)
    .then(res => {
      console.log(res)
      this.setState({event: res.data})
    })
  }

  render() {
    console.log(this.props.eventId)

    return  <div className="events-container-desktop">
              <div className="events-item-title">
                <Title title={this.state.event.name} />
               
              </div>

              <div className='events-item-decision'>
                 <Decision />
                <Share />
              </div>

              <div className="events-item-sidebar">
                
                <Map />
                <Info event={this.state.event}/>
              </div>
              <div className="events-item-content">
                <Drivers drivers={['Kat', 'Kevin']} passengers={['Tanner', 'Justin', 'James']}/>
                <Waitlist />
              </div>
            </div>; //return <div className="events-container-desktop">
  }
}

export default EventContainer;
