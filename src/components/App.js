import React from "react";
import Login from "./log/login";
import NavBar from "./navbar";
import TopNavBar from "./topNavBar/TopNavBar";
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
      isUsersPageVisible: true,
      isDashboardVisible: true,
      isUploadVisible: true,
      isTeamReportsVisible: true,
      isRecruiterFilterVisible: true
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
              {this.state.token === "" ? (
                <div>
                  <Login
                    isNavBarHidden={this.state.isNavBarHidden}
                    loginFromChild={this.loginFromChild}
                  />
                </div>
              ) : (
                <div />
              )}
            </Route>

            <Route path="/recruiterFilter">
              {this.state.isRecruiterFilterVisible ? (
                <RecruiterFilters />
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            <Route path="/teamReports">
              {this.state.isTeamReportsVisible ? (
                <TeamReports />
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            <Route path="/upload">
              {this.state.isUploadVisible ? <Upload /> : <Redirect to="/" />}
            </Route>

            <Route path="/users">
              {this.state.isUsersPageVisible ? <Users /> : <Redirect to="/" />}
            </Route>

            <Route path="/dash">
              {this.state.isDashboardVisible ? (
                <Dash />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>

            <Route path="/logout">
              <Redirect to="/login" />
            </Route>

            <Route path="/">
              <Redirect to="/dash" />
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
