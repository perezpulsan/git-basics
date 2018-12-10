import React, {Component} from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Nav</h1>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
