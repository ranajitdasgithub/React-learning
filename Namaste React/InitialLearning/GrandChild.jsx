import { Component } from "react";

class GrandChild extends Component {
  constructor(props) {
    super(props);
    console.log("GrandChild component constructor called");
  }

  componentDidMount() {
    console.log("GrandChild component mounted");
  }

  render() {
    console.log("GrandChild component render called");

    return (
      <>
        <h1>GrandChild class child component</h1>
      </>
    );
  }
}

export default GrandChild;
