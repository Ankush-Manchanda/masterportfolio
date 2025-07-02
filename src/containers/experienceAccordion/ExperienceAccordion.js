import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const { theme, sections } = this.props;

    if (!sections || sections.length === 0) {
      return null;
    }

    return (
      <div className="experience-accord">
        <Accordion>
          {sections.map((section, sectionIndex) => (
            <Panel
              key={sectionIndex}
              className="accord-panel"
              title={section.title}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: theme.body,
                    border: "1px solid",
                    borderRadius: "5px",
                    borderColor: theme.headerColor,
                    marginBottom: "3px",
                    fontFamily: "Google Sans Regular",
                    color: theme.text,
                    ":hover": {
                      color: theme.secondaryText,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: theme.body,
                  }),
                },
              }}
            >
              {section.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
