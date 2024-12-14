import { Component } from "react";

class UserClassApi extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ranajitdasgithub");
    const users = await data.json();
    this.setState({
      userInfo: users,
    });
  }
  render() {
    console.log(this.state);
    const { name, bio, location } = this.state.userInfo;
    return (
      <div>
        <h2>User Class API</h2>
        <h3>Name : {name}</h3>
        <h3>Bio : {bio}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClassApi;
