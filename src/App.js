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
      isVisibleParams: {
        isNavBarHidden: true,
        isUsersPageVisible: false,
        isDashboardVisible: true,
        isUploadVisible: false,
        isTeamReportsVisible: false,
        isRecruiterFilterVisible: false
      }
    };
    this.loginFromChild = this.loginFromChild.bind(this);
  }

  loginFromChild() {
    let temp = { ...this.state.isVisibleParams };
    temp.isNavBarHidden = temp.isNavBarHidden === false ? true : false;

    this.setState({
      isVisibleParams: { ...temp }
    });
  }

  render() {
    return (
      <div>
        <Router>
          {this.state.isVisibleParams.isNavBarHidden ? (
            <div>
              <Login
                isVisibleParams={this.state.isVisibleParams}
                loginFromChild={this.loginFromChild}
              />
            </div>
          ) : (
            <div>
              <Login
                isVisibleParams={this.state.isVisibleParams}
                loginFromChild={this.loginFromChild}
              />
              <NavBar
                isVisibleParams={this.state.isVisibleParams}
                loginFromChild={this.loginFromChild}
              />
              <TopNavBar
                isVisibleParams={this.state.isVisibleParams}
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
