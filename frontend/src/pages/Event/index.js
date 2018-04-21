import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EventContainer from '../../components/EventContainer'

class Event extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <Navbar />
            <EventContainer eventId={this.props.match.params.id} />
            <Footer />
          </div>;
    }
}

export default Event;