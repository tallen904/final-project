import  React, { Component } from "react";
import "./styles.css";
import Widget from "./Widget";
import UpcomingEvents from "./UpcomingEvents";
import EventCreationModal from "./EventCreationModal";

class DashboardContainer extends Component {
  state = {
    eventModalIsOpen: false,
  };

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
          <h5>Welcome back, Tanner Sorensen</h5>
        </div>
        <div className="create-event-div">
          <button onClick={this.openEventModal} className="button expand create-event-button">
            Create New Event
          </button>
        </div>
        <div className="widget-row">
          <Widget heading="My Events" />
          <UpcomingEvents heading="Upcoming Events" />
        </div>
        <EventCreationModal eventModalIsOpen={this.state.eventModalIsOpen} closeEventModal={this.closeEventModal} />
      </div>;
  }
}

export default DashboardContainer;
