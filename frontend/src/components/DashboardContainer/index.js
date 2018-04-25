import  React, { Component } from "react";
import MyEvents from "./MyEvents";
import UpcomingEvents from "./UpcomingEvents";
import EventCreationModal from "./EventCreationModal";
import EventAPI from '../../utils/EventAPI'
import UserAPI from '../../utils/UserAPI'

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventModalIsOpen: false,
      eventId: "",
      events: [],
      myEvents: [],
      username: "",
      date: new Date().toString(),
      newEvent: {}
    };
  }

  componentDidMount() {
    this.getUserInfo();
    this.getAllEvents();
  }

  openEventModal = () => {
    this.setState({ eventModalIsOpen: true });
  };

  closeEventModal = () => {
    this.setState({ eventModalIsOpen: false });
  };

  pushEvent = data => {
    let myEvents = this.state.myEvents
    myEvents.push(data)
    this.setState({ myEvents })
  }

  getUserInfo = () => {
    UserAPI.getUser(this.props.userId).then(res => {
      this.setState({ username: res.data.name, myEvents: res.data.events });
      let newEvents = this.state.myEvents;
      let myEvents = [];
      newEvents.map(eventId => {
        EventAPI.getEvent(eventId).then(res => {
          myEvents.push(res.data);
          this.setState({ myEvents });
        });
      });
    });
  };

  getEvent = id => {
    EventAPI.getEvent(id).then(res => {
      return res.data;
    });
  };

  getAllEvents = () => {
    EventAPI.getEvents().then(res => {
      let upcomingEvents = [];
      let myEvents = [];
      res.data.map((event, i) => {
        if (this.state.myEvents.includes(event._id)) {
          return;
        } else {
          upcomingEvents.push(event);
          myEvents.splice(i, 1);
          return;
        }
      });
      this.setState({ events: upcomingEvents, myEvents });
    });
  };

  joinEvent = e => {
    const eventId = e.target.dataset.id;
    UserAPI.updateUser(this.props.userId, { events: eventId }).then(res => {
      this.getUserInfo();
      this.getAllEvents();
    });
  };

  associateNewEvent = data => {
    const eventId = data._id
    UserAPI.updateUser(this.props.userId, { events: eventId }).then(res => {
      this.getUserInfo();
      this.getAllEvents();
    })
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="callout success dashboard-heading">
          <h5>Welcome back, {this.state.username || ''}!</h5>
          <h6>Todays date: {this.state.date}</h6>
        </div>
        <div className="create-event-div">
          <button
            onClick={this.openEventModal}
            className="expand create-event-button"
          >
            Create New Event
          </button>
        </div>
        <div className="row align-center">
          <MyEvents myEvents={this.state.myEvents} heading="My Events" />
          <UpcomingEvents
            joinEvent={this.joinEvent}
            events={this.state.events}
            heading="Upcoming Events"
          />
        </div>
        <EventCreationModal
          associate={this.associateNewEvent}
          eventModalIsOpen={this.state.eventModalIsOpen}
          closeEventModal={this.closeEventModal}
        />
      </div>
    );
  }
}

export default DashboardContainer;
