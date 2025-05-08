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
      title: "Customer Resolution Agent at British Gas",
      period: "Oct 2024 - Present",
      description: "Providing exceptional customer service and resolution support, applying user experience principles to improve customer satisfaction and streamline resolution processes."
    },
    {
      title: "UX Research Specialist at Zenith Bank PLC",
      period: "Jan 2020 - Jan 2024",
      description: "Lead research initiatives that have driven up to 30% improvement in customer satisfaction scores. Conducted qualitative and quantitative research, managed stakeholder engagement, and translated findings into actionable recommendations that directly impacted product strategy."
    },
    {
      title: "Customer Data Analyst at Zenith Bank PLC",
      period: "Nov 2017 - Dec 2019",
      description: "Analyzed user behavior patterns and customer journey data to identify pain points and opportunities for improvement. Delivered insights that contributed to 25% efficiency gains through redesign of key customer journeys."
    }
  ]
};
