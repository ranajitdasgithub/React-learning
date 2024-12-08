import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, place } = this.props; // We can destructure props like this

    return (
      <>
        <h1>Class component</h1>
        <h2>
          This name {name} and place {place} getting from props
        </h2>
      </>
    );
  }
}

export default UserClass;
