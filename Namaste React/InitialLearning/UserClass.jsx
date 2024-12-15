import React from "react";
import About from "./About";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
    console.log("Userclass constructor called");
  }
  componentDidMount() {
    console.log("Userclass component mounted");
  }
  render() {
    const { name, place } = this.props; // We can destructure props like this
    const { count, count2 } = this.state;

    console.log("userclass component render called");
    return (
      <>
        <h1>Class component</h1>
        <h2>
          This name {name} and place {place} getting from props
        </h2>
        <br />
        <h2>Class count Increment: {count}</h2>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
        <h2>Class count Decrement: {count2}</h2>
        <button
          onClick={() =>
            this.setState({
              count2: count2 - 1,
            })
          }
        >
          Decrement
        </button>
        {/* About component */}
        <About car="BMW" />
        <About car="Audi" />
      </>
    );
  }
}

export default UserClass;

/* 
  Userclass(parent) constructor called
  Userclass(parent) render called
    About(child1 BMW) constructor called
    About(child1 BMW) render called
    About(child2 Audi) constructor called
    About(child2 Audi) render called

    <DOM updated in a single Batch>
    About(child1 BMW) didMount called
    About(child2 Audi) didMount called
  Userclass(parent) didMount called 
*/
