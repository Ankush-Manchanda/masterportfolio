import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection } from "../../portfolio";

export default function Achievement() {
  if (!achievementSection?.achivementsCards?.length) {
    return null; // Avoid rendering if there's no data
  }

  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">
            {achievementSection.title}
          </h1>
          <p className="subTitle achievement-subtitle">
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map((card, index) => (
            <AchivementCard
              key={index}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                footer: card.footerLink,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
