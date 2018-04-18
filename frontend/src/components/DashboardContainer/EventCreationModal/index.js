import React from "react";
import Modal from "react-modal";
import EventForm from './EventForm'

class EventCreationModal extends React.Component {
  render() {
    return <div>
        <Modal ariaHideApp={false} isOpen={this.props.eventModalIsOpen} onRequestClose={this.props.closeEventModal}>
          <button className="close-button" onClick={this.props.closeEventModal} data-close="" aria-label="Close reveal" type="button">
            <span aria-hidden="true">
              <h2>&times;</h2>
            </span>
          </button>
          <EventForm />
        </Modal>
      </div>;
  }
}

export default EventCreationModal;
