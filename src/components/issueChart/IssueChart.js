import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

// ❌ REMOVE Chart.register and all Chart.js component imports

const IssueChart = () => {
  const openIssues = IssueData?.open || 0;
  const closedIssues = IssueData?.closed || 0;

  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [openIssues, closedIssues],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 2000,
    },
    legend: {
      position: "bottom",
      labels: {
        fontSize: 12,
        boxWidth: 12,
      },
    },
  };

  return (
    <div className="issue-chart">
      <h2 className="issue-chart-header">Issue Distribution</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default IssueChart;
