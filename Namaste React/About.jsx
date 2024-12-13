import React from "react";
// import {Component} from "react";
// class About extends Component { //we can directly use Component after destructure from react

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About component constructor called");
  }

  componentDidMount() { //used for api calls
    console.log("About component mounted"); 
  }

  render() {
    console.log("About component render called");

    return (
      <>
        <h1>About class child component: props {this.props.car}</h1>
      </>
    );
  }
}

export default About;
