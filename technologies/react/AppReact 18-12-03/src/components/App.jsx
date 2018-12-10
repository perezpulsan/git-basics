import React from "react";
import Header from "./Header";
import Settings from "./Settings";
import Nav from "./Nav";
import Store from "./Store";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: {},
    };
  }
  handleChange = e => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Settings handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
