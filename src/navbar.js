import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.props.loginFromChild();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.isNavBarHidden ? (
            <div>Navbaar!!</div>
          ) : (
            <div>
              <ul>
                <li>
                  <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
