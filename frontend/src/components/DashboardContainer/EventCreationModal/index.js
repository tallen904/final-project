import React from "react";
import Modal from "react-modal";

class EventCreationModal extends React.Component {
  render() {
    return <div>
        <Modal ariaHideApp={false} isOpen={this.props.eventModalIsOpen} onRequestClose={this.props.closeEventModal}>
          <p>Hello World!</p>
          <button className="close-button" onClick={this.props.closeEventModal} data-close="" aria-label="Close reveal" type="button">
            <span aria-hidden="true">
              <h2>&times;</h2>
            </span>
          </button>
          <form data-abide>
            <label>
              Amount
              <div className="input-group">
                <span className="input-group-label">$</span>
                <input className="input-group-field" id="exampleNumberInput" type="number" required pattern="number" />
              </div>
              <span className="form-error" data-form-error-for="exampleNumberInput">
                Amount is required.
              </span>
            </label>
            <div className="name-field">
              <label>
                Your name <small>required</small>
                <input type="text" required pattern="[a-zA-Z]+" />
              </label>
              <small className="error">
                Name is required and must be a string.
              </small>
            </div>
            <div className="email-field">
              <label>
                Email <small>required</small>
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
