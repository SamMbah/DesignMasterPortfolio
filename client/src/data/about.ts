interface Experience {
  title: string;
  period: string;
  description: string;
}

interface AboutData {
  bio: string;
  approach: string;
  experience: Experience[];
}

export const aboutData: AboutData = {
  bio: "UX Designer & Research Specialist with 6+ years of experience delivering qualitative and quantitative research that solves real-world problems.",
  approach: "I'm an impact-driven research specialist focused on transforming complex findings into actionable insights that improve customer outcomes and influence product strategies. My approach involves working autonomously across squads, shaping research priorities, and driving evidence-based decision-making that aligns with both organizational and customer goals.",
  experience: [
    {
      title: "UX Research Specialist at Zenith Bank PLC",
      period: "2020 - Present",
      description: "Lead research initiatives that have driven up to 30% improvement in customer satisfaction scores. Conduct qualitative and quantitative research, manage stakeholder engagement, and translate findings into actionable recommendations that directly impact product strategy."
    },
    {
      title: "Customer Data Analyst at Zenith Bank PLC",
      period: "2018 - 2020",
      description: "Analyzed user behavior patterns and customer journey data to identify pain points and opportunities for improvement. Delivered insights that contributed to 25% efficiency gains through redesign of key customer journeys."
    },
    {
      title: "UX Design Consultant (Freelance)",
      period: "2017 - 2018",
      description: "Provided user experience design and research services for clients across fintech, e-commerce, and health tech sectors, focusing on creating inclusive and accessible user interfaces."
    }
  ]
};
