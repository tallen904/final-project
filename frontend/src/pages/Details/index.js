import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DetailsContainer from '../../components/DetailsContainer'

class Details extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <DetailsContainer />
                <Footer />
            </div>
        );
    }
}

export default Details;