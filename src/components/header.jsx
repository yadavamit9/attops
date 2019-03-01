import React,{Component} from "react";

class Header extends Component{
constructor(props){
  super(props);

  //this.updateActiveTab = this.updateActiveTab.bind(this);
  this.state = {
    activeTab : "home"
  }
  }

  updateActiveTab = (key, _) => {
    this.setState({activeTab : key});
  };
  

  render () {
    return(
      <div className="header">
      <a href="#default" class="logo">CompanyLogo</a>
      <div className="header-right">
        <a className="active" href="#about" onClick={val => this.updateActiveTab('home',val)}>Home</a>
        <a  href="#home" onClick={val => this.updateActiveTab('abhyasi',val)}> Abhyasi</a>
        <a href="#contact" onClick={val => this.updateActiveTab('trainer',val)}>Trainer </a>
      </div>
    </div>
    );
  }
}

export default Header;