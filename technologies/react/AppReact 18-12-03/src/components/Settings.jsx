import React, {Component} from "react";

class Settings extends Component {
  render() {
    return (
      <form className="form-group">
        <label for="formGroupExampleInput2">Input form</label>
        <input
          type="text"
          className="form-control "
          onChange={this.props.handleChange}
          id="formGroupExampleInput2"
          placeholder="Another input"
        />
      </form>
    );
  }
}

export default Settings;
