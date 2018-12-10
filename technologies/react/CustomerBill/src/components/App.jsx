import React, {Component} from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <Header />
        </div>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
