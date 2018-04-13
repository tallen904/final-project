import React from "react";
import Modal from "react-modal";

class EventCreationModal extends React.Component {
  render() {
    return <div>
        <Modal ariaHideApp={false} isOpen={this.props.eventModalIsOpen} onRequestClose={this.props.closeEventModal}>
          <button className="close-button" onClick={this.props.closeEventModal} data-close="" aria-label="Close reveal" type="button">
            <span aria-hidden="true">
              <h2>&times;</h2>
            </span>
          </button>
          <form id='event-creation-form'>
            <div className="event-title-field">
              <label>
                Event Title <small>(required)</small>
                <input type="text" required pattern="[a-zA-Z]+" />
              </label>
            </div>
            <div className="email-field">
              <label>
                Email
                <input type="email" required />
              </label>
              <small className="error">An email address is required.</small>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>;
  }
}

export default EventCreationModal;
