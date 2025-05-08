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
  bio: "UX/UI Designer with 5+ years of experience creating user-centered digital experiences for diverse industries.",
  approach: "I believe in creating meaningful digital experiences that balance business goals with user needs. My design process is deeply rooted in empathy, research, and collaboration. I work closely with cross-functional teams to ensure designs are not just beautiful, but solve real problems for users.",
  experience: [
    {
      title: "Senior UX Designer at DigitalCraft",
      period: "2021 - Present",
      description: "Lead UX designer for enterprise clients across healthcare and fintech sectors. Responsible for research, design strategy, and team collaboration."
    },
    {
      title: "UX/UI Designer at TravelTech",
      period: "2019 - 2021",
      description: "Designed user experiences for travel booking platforms focusing on personalization and streamlined booking processes."
    },
    {
      title: "UI Designer at EcomSolutions",
      period: "2017 - 2019",
      description: "Created visual designs for e-commerce clients focusing on conversion optimization and brand consistency."
    }
  ]
};
