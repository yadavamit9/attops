import React, { Component } from 'react';
import './style.css';
import Header from './header';
import Abhyasi from './abhyasi';
import Trainer from './trainer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.activeTab,
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.activeTab === 'Abhyasi' && <Abhyasi />}
        {this.activeTab === 'Trainer' && <Trainer />}
      </div>
    );
  }

}

export default Home;