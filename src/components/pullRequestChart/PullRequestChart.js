import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const open = PullRequestData?.open || 0;
    const merged = PullRequestData?.merged || 0;
    const closed = PullRequestData?.closed || 0;

    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [open, merged, closed],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#555", // Adjust based on theme if needed
          },
        },
      },
      animation: {
        duration: 2000,
      },
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default PullRequestChart;
