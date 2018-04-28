import React from "react";
import $ from "jquery";
import Foundation from "foundation-sites";
import EventAPI from "../../../../utils/EventAPI";
import CarAPI from "../../../../utils/CarAPI"

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.abide;
    this.form;
    this.state = {
      submitDisabled: false,
      name: "",
      eventLocation: "",
      eventCity: "",
      eventState: "",
      eventZipcode: "",
      eventDate: "",
      meetupLocation: "",
      meetupDate: "",
      numSeats: 0
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.abide = new Foundation.Abide($("#event-form"), {
      liveValidate: false
    });
    this.form = $("#event-form");

    this.form.on("invalid.zf.abide", () => {
      console.log("invalid");
      this.disableSubmit();
    });
    this.form.on("valid.zf.abide", () => {
      console.log("valid");
      if ($(".is-invalid-input", this.form).length === 0) this.enableSubmit();
    });
  }

  componenWillUnmount() {
    this.abide.destory();
  }

  onSubmit = e => {
    e.preventDefault();
    const { eventLocation, eventCity, eventState, eventZipcode } = this.state
    const eventAddress = `${eventLocation} ${eventCity}, ${eventState} ${eventZipcode}`
    CarAPI.createCar({
      seats: this.state.numSeats,
      driver: this.props.userId
    }).then(res => {
      EventAPI.createEvent({
        name: this.state.name,
        location: eventAddress,
        time: this.state.eventDate,
        meetupLocation: this.state.meetupLocation,
        meetupDate: this.state.meetupDate,
        driver: this.props.userId,
        cars: res.data._id
      }).then(res => {
        this.props.associate(res.data)
        this.props.closeModal();
      });
    })
  };

  onChange = e => {
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  enableSubmit() {
    this.setState({ submitDisabled: false });
  }

  disableSubmit() {
    this.setState({ submitDisabled: true });
  }

  render() {
    return (
      <div>
        <h1 className="row align-center">
          <div className="small-6 columns">Event Creation</div>
        </h1>
        <form
          id="event-form"
          className="small-12 columns"
          data-abide
          noValidate
          onSubmit={this.onSubmit}
        >
          <div className="row align-center">
            <div className="small-12 columns align-center">
              <div
                data-abide-error
                role="alert"
                className="alert callout"
                style={{ display: "none", textAlign: "center" }}
              >
                <p className="form-alert-text">
                  <i className="fi-alert" /> There are some errors in your form.
                </p>
              </div>
            </div>
          </div>
          <div className="event-form row">
            <div className="event-details small-12 large-6">
              <h3 style={{ textAlign: "center" }}>Event Details</h3>
              <div className="row align-center">
                <div className="small-12 large-10 columns">
                  <label>
                    Event Title
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">Event Title is required</span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <div className="small-12 large-10 columns ">
                  <label>
                    Event Street Address
                    <input
                      type="text"
                      name="eventLocation"
                      value={this.state.eventLocation}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">
                      Event Street Address is required
                    </span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <div className="small-6 large-6 columns ">
                  <label>
                    City
                    <input
                      type="text"
                      name="eventCity"
                      value={this.state.eventCity}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">City is required</span>
                  </label>
                </div>
                <div className="small-3 large-2 columns ">
                  <label>
                    State
                    <input
                      type="text"
                      name="eventState"
                      value={this.state.eventState}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">State is required</span>
                  </label>
                </div>
                <div className="small-3 large-2 columns ">
                  <label>
                    Zipcode
                    <input
                      type="text"
                      name="eventZipcode"
                      value={this.state.eventZipcode}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">Zipcode is required</span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <div className="small-12 large-10 columns">
                  <label>
                    Date & Time of Event
                    <input
                      type="datetime-local"
                      name="eventDate"
                      value={this.state.eventDate}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">
                      Date & Time of Event is required
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="meetup-details small-12 large-6">
              <h3 style={{ textAlign: "center" }}>Carpool Details</h3>
              <div className="row align-center">
                <div className="small-12 large-10 columns">
                  <label>
                    Carpool Meetup Location
                    <input
                      type="text"
                      name="meetupLocation"
                      value={this.state.meetupLocation}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">
                      Carpool Meetup Location is required
                    </span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <div className="small-12 large-10 columns">
                  <label>
                    Carpool Meetup Date
                    <input
                      type="datetime-local"
                      name="meetupDate"
                      value={this.state.meetupDate}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">
                      Carpool Meetup Date is required
                    </span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <div className="small-12 large-10 columns">
                  <label>
                    Number of Available Seats
                    <input
                      type="number"
                      min="1"
                      step="1"
                      name="numSeats"
                      value={this.state.numSeats}
                      required
                      onChange={this.onChange}
                    />
                    <span className="form-error">
                      Number of Seats is required
                    </span>
                  </label>
                </div>
              </div>
              <div className="row align-center">
                <button
                  type="submit"
                  className="button"
                  disabled={this.state.submitDisabled}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
