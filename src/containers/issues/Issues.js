import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div className="main" id="issues">
        <div className="issues-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="issues-header" style={{ color: theme.text }}>
              Issues
            </h1>
          </Fade>
        </div>

        <div className="issues-body-div">
          {issuesData?.data?.map((issue, index) => (
            <IssueCard key={index} issue={issue} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
}

export default Issues;
