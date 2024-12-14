import { Component } from "react";

class UserClassApi extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Dummmy data",
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
  componentDidUpdate() {
    console.log("ComponentDidUpdate is called");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount is called");
  }
  render() {
    console.log(this.state);
    const { avatar_url, name, bio, location } = this.state.userInfo;
    return (
      <div>
        <h2>User Class API</h2>
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h3>Bio : {bio}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClassApi;
