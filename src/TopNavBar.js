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
import Logo from "./directi_logo.jpeg";

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

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
          {this.props.isVisibleParams.isRecruiterFilterVisible ? (
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

          <Tooltip title="Team Reports">
            <IconButton aria-label="show 5 new mails" color="inherit">
              <Link to="/teamReports" color="primary">
                <DvrIcon />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Users">
            <IconButton aria-label="show 5 new mails" color="inherit">
              <Link to="/users" color="primary">
                <PeopleIcon />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Upload">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Link to="/upload" color="primary">
                <CloudUploadIcon />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Logout">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Link to="/logOut" color="primary">
                <ExitToAppIcon />
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
