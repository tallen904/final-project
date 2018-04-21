import  React, { Component } from "react";
import MyEvents from "./MyEvents";
import UpcomingEvents from "./UpcomingEvents";
import EventCreationModal from "./EventCreationModal";
import EventAPI from '../../utils/EventAPI'
import UserAPI from '../../utils/UserAPI'

class DashboardContainer extends Component {
  constructor(props){
    super(props);
    this.state = { eventModalIsOpen: false,
                   eventId: '',
                   events: [],
                   myEvents: [],
                   username: "Tanner Sorensen",
                   date: new Date().toString() 
                  };
  }

  componentDidMount() {
    this.getUserInfo()
    EventAPI.getEvents()
    .then(res => {
      this.setState({ events: res.data })
    })
  }

  openEventModal = () => {
    this.setState({ eventModalIsOpen: true });
  };

  closeEventModal = () => {
    this.setState({ eventModalIsOpen: false });
  };

  getUserInfo = () => {
    UserAPI.getUser(this.props.userId).then(res => {
      this.setState({ username: res.data.name, myEvents: res.data.events });
      let newEvents = this.state.myEvents
      let pushEvents = [];
      newEvents.map(eventId => {
        EventAPI.getEvent(eventId).then(res => {
          pushEvents.push(res.data)
          this.setState({ myEvents: pushEvents })
        })
      })
    });
  }

  getEvent = id => {
    EventAPI.getEvent(id).then(res => {
      return res.data
    })
  }

  // joinEvent = e => {
  //   const eventId = e.target.dataset.id
  //   EventAPI.getEvent(eventId).then(res => {
  //     console.log(res.data)
  //     UserAPI.updateUser(this.props.userId, eventId).then(res => {
  //       console.log(res)
  //     })
  //   })
  // }

  joinEvent = e => {
    const eventId = e.target.dataset.id
    EventAPI.getEvent(eventId).then(res => {
      console.log(res)
      let newEventId = res.data._id
      UserAPI.updateUser(this.props.userId, { events : newEventId }).then(res => {
        console.log(res)
      })
    })
  }

  render() {
    return <div className="dashboard-container">
        <div className="callout success dashboard-heading">
          <h5>Welcome back, {this.state.username}!</h5>
          <h6>Todays date: {this.state.date}</h6>
        </div>
        <div className="create-event-div">
          <button onClick={this.openEventModal} className="button expand create-event-button">
            Create New Event
          </button>
        </div>
        <div className="row align-center">
          <MyEvents myEvents={this.state.myEvents} heading="My Events" />
          <UpcomingEvents joinEvent={this.joinEvent} events={this.state.events} heading="Upcoming Events" />
        </div>
        <EventCreationModal eventModalIsOpen={this.state.eventModalIsOpen} closeEventModal={this.closeEventModal} />
      </div>;
  }
}

export default DashboardContainer;
