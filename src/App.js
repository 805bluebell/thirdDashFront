import React from "react";
import Login from "./login";
import NavBar from "./navbar";
import TopNavBar from "./TopNavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isNavBarHidden: true,
      isUsersPageVisible: false,
      isDashboardVisible: true,
      isUploadVisible: false,
      isTeamReportsVisible: false,
      isRecruiterFilterVisible: false
    };
    this.loginFromChild = this.loginFromChild.bind(this);
  }

  loginFromChild() {
    let temp = this.state.isNavBarHidden;

    this.setState({
      isNavBarHidden: temp === true ? false : true
    });
  }

  render() {
    return (
      <div>
        <Router>
          {this.state.isNavBarHidden ? (
            <div>
              <Login
                isNavBarHidden={this.state.isNavBarHidden}
                loginFromChild={this.loginFromChild}
              />
            </div>
          ) : (
            <div>
              <Login
                isNavBarHidden={this.state.isNavBarHidden}
                loginFromChild={this.loginFromChild}
              />
              <NavBar
                isNavBarHidden={this.state.isNavBarHidden}
                loginFromChild={this.loginFromChild}
              />
              <TopNavBar
                isNavBarHidden={this.state.isNavBarHidden}
                isUsersPageVisible={this.state.isUsersPageVisible}
                isDashboardVisible={this.state.isDashboardVisible}
                isUploadVisible={this.state.isUploadVisible}
                isTeamReportsVisible={this.state.isTeamReportsVisible}
                isRecruiterFilterVisible={this.state.isRecruiterFilterVisible}
                loginFromChild={this.loginFromChild}
              />
            </div>
          )}

          <Switch>
            <Route path="/login">
              <h3>Login Page</h3>
            </Route>

            <Route path="/users">
              {this.state.isUsersPageVisible ? (
                <Users />
              ) : (
                <Redirect to="/home" />
              )}
            </Route>

            <Route path="/dash">
              <Dash />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const Users = () => <div>users</div>;
const Dash = () => <div>Dashboard</div>;
const Upload = () => <div>Upload</div>;
const RecruiterFilters = () => <div>Recruiter Filters</div>;
const TeamReports = () => <div>Team reports inside</div>;
const Home = () => <div>Homer</div>;

export default App;
