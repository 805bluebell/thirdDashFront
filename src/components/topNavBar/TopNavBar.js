import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DvrIcon from "@material-ui/icons/Dvr";
import FilterListIcon from "@material-ui/icons/FilterList";
import Tooltip from "@material-ui/core/Tooltip";

import { Link } from "react-router-dom";
import "./TopNavBar.css";
import Logo from ".././directi_logo.jpeg";

class TopNavBar extends React.Component {
  render() {
    return (
      <div className={"sickle"}>
        <Tooltip title="TA Reports">
          <IconButton aria-label="show 5 new mails" color="inherit">
            <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
              Talent Aquisition
            </Link>
          </IconButton>
        </Tooltip>

        <div className={"gap-in-flex"} />
        <div className={"rightSide"}>
          {this.props.isRecruiterFilterVisible ? (
            <Tooltip title="Recruiter Filter">
              <IconButton aria-label="show 5 new mails" color="inherit">
                <Link to="/recruiterFilter" color="inherit">
                  <FilterListIcon color="primary" />
                </Link>
              </IconButton>
            </Tooltip>
          ) : (
            <div />
          )}

          {this.props.isTeamReportsVisible ? (
            <Tooltip title="Team Reports">
              <IconButton aria-label="show 5 new mails" color="inherit">
                <Link to="/teamReports" color="primary">
                  <DvrIcon />
                </Link>
              </IconButton>
            </Tooltip>
          ) : (
            <div />
          )}

          {this.props.isUsersPageVisible ? (
            <Tooltip title="Users">
              <IconButton aria-label="show 5 new mails" color="inherit">
                <Link to="/users" color="primary">
                  <PeopleIcon />
                </Link>
              </IconButton>
            </Tooltip>
          ) : (
            <div />
          )}

          {this.props.isUploadVisible ? (
            <Tooltip title="Upload">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Link to="/upload" color="primary">
                  <CloudUploadIcon />
                </Link>
              </IconButton>
            </Tooltip>
          ) : (
            <div />
          )}

          <Tooltip title="Logout">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Link to="/logout" color="primary">
                <ExitToAppIcon onClick={this.props.loginFromChild} />
              </Link>
            </IconButton>
          </Tooltip>
          <div className={"last-updated"}>
            Last updated : 17 Jan 1994 09:55 AM
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
