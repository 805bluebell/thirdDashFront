import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    this.props.loginFromChild();
  }
  render() {
    let loginStatus = this.props.isNavBarHidden;
    let buttonText = loginStatus ? "Enter" : "Logout";
    return (
      <div>
        <button onClick={this.handleButton}>{buttonText}</button>
      </div>
    );
  }
}

export default Login;
