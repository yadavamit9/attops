import React,{Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import setActiveTab from '../actions/setActiveTab';


class Header extends Component{

  updateActiveTab = (key, _) => {
    this.setState({activeTab : key});
  };
  
  render () {
    return(
      <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        <a className="active" href="#home" onClick={()=> this.props.setActiveTab(null)}>Home</a>
        <a  href="#Abhyasi" onClick={()=> this.props.setActiveTab('Abhyasi')}> Abhyasi</a>
        <a href="#Trainer" onClick={()=> this.props.setActiveTab('Trainer')}>Trainer </a>
      </div>
    </div>
    );
  }
}

export default connect(
    state => ({
    activeTab: state.activeTab
  }),
    dispatch => ({
    setActiveTab : bindActionCreators(setActiveTab,dispatch)
  }),
)(Header);