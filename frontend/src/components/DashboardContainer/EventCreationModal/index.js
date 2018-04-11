import React, { Component } from 'react';
import Modal from 'react-foundation-modal'
import { Foundation, Row, Column } from 'react-foundation'


class EventCreationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      event: '',

    };
  }

  onSubmit = e => {
    e.preventDefault();
    alert(`username: ${this.state.username}`);
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  triggerModal = status => {
    this.setState({ modalIsOpen: status });
  };

  render() {
    return <div>
        <p>
          <button className="button" onClick={() => this.triggerModal(true)}>
            Click me for a modal
          </button>
        </p>
        <Modal open={this.state.modalIsOpen} closeModal={this.triggerModal} isModal={true} size="large">
          <h1>Event Creation</h1>
          <form onSubmit={this.onSubmit}>
            <div className="grid-basics-example">
  <Row className="display">
    <Column small={2} large={4}>4 columns</Column>
    <Column small={4} large={4}>4 columns</Column>
    <Column small={6} large={4}>4 columns</Column>
  </Row>
  </div>
            <Row className='display'>
              <Column small={2} large={6}>
                <label>
                  Event Title
                  <input name="event" value={this.state.event} onChange={this.onChange} type="text" placeholder="Event" />
                </label>
              </Column>
              <Column small={4} large={6}>
                <p>Hello</p>
              </Column>
            </Row>
          </form>
          <button className="button" type="button" onClick={() => this.triggerModal(false)}>
            Close
          </button>
        </Modal>
      </div>;
  }
}

export default EventCreationModal;