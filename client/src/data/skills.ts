export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillsData {
  uxSkills: Skill[];
  uiSkills: Skill[];
  tools: string[];
  methodologies: string[];
}

export const skills: SkillsData = {
  uxSkills: [
    {
      name: "User Research",
      level: "Expert",
      percentage: 95
    },
    {
      name: "Information Architecture",
      level: "Advanced",
      percentage: 85
    },
    {
      name: "Wireframing & Prototyping",
      level: "Expert",
      percentage: 90
    },
    {
      name: "Usability Testing",
      level: "Advanced",
      percentage: 85
    },
    {
      name: "Journey Mapping",
      level: "Expert",
      percentage: 95
    }
  ],
  uiSkills: [
    {
      name: "Design Systems",
      level: "Expert",
      percentage: 95
    },
    {
      name: "Visual Design",
      level: "Advanced",
      percentage: 85
    },
    {
      name: "Interaction Design",
      level: "Advanced",
      percentage: 80
    },
    {
      name: "Responsive Design",
      level: "Expert",
      percentage: 90
    },
    {
      name: "Accessibility (WCAG)",
      level: "Advanced",
      percentage: 85
    }
  ],
  tools: [
    "Figma",
    "Sketch",
    "Adobe XD",
    "InVision",
    "Miro",
    "Jira",
    "Git/GitHub",
    "Trello",
    "HTML/CSS",
    "Analytics"
  ],
  methodologies: [
    "Design Thinking",
    "Agile/Scrum",
    "Lean UX",
    "User-Centered Design",
    "Jobs To Be Done",
    "Design Sprints",
    "Double Diamond",
    "Atomic Design",
    "Accessibility Standards"
  ]
};
