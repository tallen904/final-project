import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DashboardContainer from '../../components/DashboardContainer'

class Dashboard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Navbar />
                <DashboardContainer user='Tanner Sorensen'/>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;