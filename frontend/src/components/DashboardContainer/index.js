import  React, { Component } from "react";
import MyEvents from "./MyEvents";
import UpcomingEvents from "./UpcomingEvents";
import EventCreationModal from "./EventCreationModal";
import EventAPI from '../../utils/EventAPI'

class DashboardContainer extends Component {
  state = {
    eventModalIsOpen: false,
    events: [],
    user: {
      name: 'Tanner Sorensen',
      date: 'April 16th, 2018'
    }
  };

  componentDidMount() {
    EventAPI.getEvents()
    .then(res => {
      this.setState({events: res.data})
    })
  }

  openEventModal = () => {
    this.setState({ eventModalIsOpen: true });
  };

  closeEventModal = () => {
    this.setState({ eventModalIsOpen: false });
  };

  render() {

    return <div className="dashboard-container">
        <div className="callout success dashboard-heading">
          <h4>My Dashboard</h4>
          <h5>Welcome back, {this.state.user.name}!</h5>
          <h6>Todays date: {this.state.user.date}</h6>
        </div>
        <div className="create-event-div">
          <button onClick={this.openEventModal} className="button expand create-event-button">
            Create New Event
          </button>
        </div>
        <div className="row align-center">
          <MyEvents heading="My Events" />
          <UpcomingEvents events={this.state.events} heading="Upcoming Events" />
        </div>
        <EventCreationModal eventModalIsOpen={this.state.eventModalIsOpen} closeEventModal={this.closeEventModal} />
      </div>;
  }
}

export default DashboardContainer;
