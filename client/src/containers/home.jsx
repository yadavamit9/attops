import React, { Component } from 'react';
import './style.css';
import Header from './header';
import Abhyasi from '../components/abhyasi';
import Trainer from '../components/trainer';
import HomePage from '../components/homePage';

import { connect } from 'react-redux';

  class Home extends Component {

    render() {
      return (
        <div>
          {<Header />}
          {this.props.activeTab === null && <HomePage />}
          {this.props.activeTab === 'Abhyasi' && <Abhyasi />}
          {this.props.activeTab === 'Trainer' && <Trainer />}
        </div>
      );
    }

  }

export default connect(
  state => ({
    activeTab: state.activeTab
  })
)(Home);