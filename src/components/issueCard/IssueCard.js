import React, { Component } from "react";
import "./IssueCard.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

class IssueCard extends Component {
  render() {
    const { issue } = this.props;
    const {
      title,
      url,
      number,
      createdAt,
      closed,
      repository,
      assignees,
    } = issue;

    const iconPR = closed
      ? {
          iconifyClass: "octicon:issue-closed",
          style: { color: "#d73a49" },
          bgColor: "#ffdce0",
        }
      : {
          iconifyClass: "octicon:issue-opened",
          style: { color: "#28a745" },
          bgColor: "#dcffe4",
        };

    const subtitleString = `#${number} opened on ${createdAt.split("T")[0]}`;

    const assigneeNode = assignees?.nodes?.[0];
    const assignee = assigneeNode ? (
      <OverlayTrigger
        key={assigneeNode.name}
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            <strong>{`Assigned to ${assigneeNode.name}`}</strong>
          </Tooltip>
        }
      >
        <a href={assigneeNode.url} target="_blank" rel="noopener noreferrer">
          <img
            className="assigned-to-img"
            src={assigneeNode.avatarUrl}
            alt={assigneeNode.name}
          />
        </a>
      </OverlayTrigger>
    ) : null;

    return (
      <Fade bottom duration={2000} distance="40px">
        <div
          className="issue-card"
          style={{
            backgroundColor: iconPR.bgColor,
            border: `1px solid ${iconPR.style.color}`,
          }}
        >
          <div className="issue-top">
            <div className="issue-header">
              <span
                className="iconify issue-icons"
                data-icon={iconPR.iconifyClass}
                style={iconPR.style}
                data-inline="false"
              ></span>
              <div className="issue-title-header">
                <p className="issue-title">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </p>
                <p className="issue-subtitle">{subtitleString}</p>
              </div>
            </div>
          </div>

          <div className="issue-down">
            <div className="assignee-repo">
              <p className="parent-repo">
                Repository:{" "}
                <a
                  style={{ color: iconPR.style.color }}
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repository.owner.login}/{repository.name}
                </a>
              </p>
              <div className="assignee-info">{assignee}</div>
            </div>
            <div className="owner-img-div">
              <a
                href={repository.owner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="owner-img"
                  src={repository.owner.avatarUrl}
                  alt={`${repository.owner.login} avatar`}
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default IssueCard;
