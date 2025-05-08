export interface ProjectImage {
  title: string;
  src: string;
}

export interface DesignDecision {
  title: string;
  description: string;
}

export interface Outcome {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  focus: string;
  challenge: string;
  role: string;
  timeline: string;
  research: {
    image?: string;
    methods: string[];
    findings: string[];
  };
  design: {
    images?: ProjectImage[];
    decisions: DesignDecision[];
    finalDesigns?: ProjectImage[];
  };
  outcomes: Outcome[];
  tools: string[];
}

export const projectsData: Project[] = [
  {
    id: "project1",
    title: "ShopSmart: E-commerce App Redesign",
    focus: "UX Research Focus",
    challenge: "Redesigning a struggling e-commerce platform with high cart abandonment rates and poor customer satisfaction scores.",
    role: "Lead UX Researcher and Designer working with product managers, developers, and marketing team.",
    timeline: "4 months (October 2022 - January 2023)",
    research: {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "Competitive analysis of 8 e-commerce platforms",
        "Usability testing with 12 participants",
        "Customer journey mapping",
        "User interviews (n=18)",
        "Analytics review (conversion funnels, heatmaps)"
      ],
      findings: [
        "Checkout process required too many steps (7 vs. industry avg. of 3)",
        "Navigation categories didn't match mental models of users",
        "Product filtering was inadequate for complex searches",
        "Mobile experience suffered from poor performance and layout issues"
      ]
    },
    design: {
      images: [
        {
          title: "Wireframes",
          src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        },
        {
          title: "Prototypes",
          src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        },
        {
          title: "Usability Testing",
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        }
      ],
      decisions: [
        {
          title: "Streamlined checkout",
          description: "Reduced steps from 7 to 3, implementing guest checkout option"
        },
        {
          title: "Reorganized navigation",
          description: "Card sorting with users to create intuitive category structure"
        },
        {
          title: "Enhanced filters",
          description: "Created advanced filtering system with visual indicators"
        },
        {
          title: "Mobile-first approach",
          description: "Redesigned mobile experience for performance and usability"
        }
      ],
      finalDesigns: [
        {
          title: "Desktop Experience",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Experience",
          src: "https://pixabay.com/get/g194e7012469b1f5b0bf54c1a3715ec8e8de031877ac8ff461c7027e73629d4a4bcb69ca40b9a66c1fc6eb98632913d8147f1f9be24b79f22e5922e6f012687ba_1280.jpg"
        }
      ]
    },
    outcomes: [
      {
        value: "37%",
        label: "Reduction in cart abandonment rate"
      },
      {
        value: "24%",
        label: "Increase in conversion rate"
      },
      {
        value: "42%",
        label: "Increase in customer satisfaction score"
      }
    ],
    tools: [
      "Figma", "UserTesting", "Optimal Workshop", "Hotjar", "Google Analytics", 
      "Customer Journey Mapping", "Usability Testing", "A/B Testing"
    ]
  },
  {
    id: "project2",
    title: "HealthConnect: Patient Portal Redesign",
    focus: "UX Design Focus",
    challenge: "Redesigning a healthcare provider's patient portal to improve accessibility, appointment scheduling, and health information management.",
    role: "Lead UX Designer working with healthcare professionals, IT team, and patient representatives.",
    timeline: "6 months (March 2022 - August 2022)",
    research: {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "User interviews with 20 patients of diverse demographics",
        "Contextual inquiry with 8 healthcare providers",
        "Accessibility audit of existing portal",
        "Competitive analysis of 5 healthcare portals",
        "Survey of 150 patients on pain points and priorities"
      ],
      findings: [
        "Elderly patients struggled with navigation complexity",
        "Critical information was buried several clicks deep",
        "Appointment scheduling lacked flexibility and clarity",
        "Medical terminology was confusing for users",
        "Mobile experience was significantly compromised"
      ]
    },
    design: {
      images: [
        {
          title: "Information Architecture",
          src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
        }
      ],
      decisions: [
        {
          title: "Simplified navigation",
          description: "Restructured to prioritize common tasks and reduce cognitive load"
        },
        {
          title: "Accessible design",
          description: "Implemented WCAG 2.1 AA standards for all user interfaces"
        },
        {
          title: "Plain language approach",
          description: "Replaced medical jargon with user-friendly terminology"
        },
        {
          title: "Responsive design",
          description: "Created fully-functional experience across all devices"
        }
      ],
      finalDesigns: [
        {
          title: "Dashboard View",
          src: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Appointment Scheduling",
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Mobile Experience",
          src: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "89%",
        label: "User satisfaction rating (up from 42%)"
      },
      {
        value: "64%",
        label: "Increase in online appointment scheduling"
      },
      {
        value: "98%",
        label: "WCAG compliance score"
      }
    ],
    tools: [
      "Figma", "Design System", "Accessibility Audit", "User Interviews", 
      "Card Sorting", "Prototyping", "Accessibility Testing"
    ]
  },
  {
    id: "project3",
    title: "WealthTrack: Financial Dashboard UI Design",
    focus: "UI Design Focus",
    challenge: "Creating a visually sophisticated yet intuitive financial dashboard that visualizes complex data for both professional analysts and everyday users.",
    role: "UI Designer collaborating with UX researchers, data visualists, and financial experts.",
    timeline: "3 months (May 2023 - July 2023)",
    research: {
      methods: [
        "Visual competitive analysis of financial platforms",
        "User preference testing of visual styles",
        "Data visualization comprehension studies",
        "Expert interviews with financial analysts",
        "Eye-tracking studies of dashboard layouts"
      ],
      findings: [
        "Visual noise competed with critical financial data",
        "Color systems lacked semantic meaning for financial context",
        "Charts were often presented without sufficient context",
        "Dark mode was highly requested but poorly implemented",
        "Mobile adaptations lost critical information hierarchy"
      ]
    },
    design: {
      images: [
        {
          title: "UI Component Library",
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
        }
      ],
      decisions: [
        {
          title: "Purposeful color system",
          description: "Created financial-specific color semantics for data visualization"
        },
        {
          title: "Information density management",
          description: "Balanced data richness with visual clarity through progressive disclosure"
        },
        {
          title: "Consistent component library",
          description: "Developed standardized UI components for all financial data types"
        },
        {
          title: "Accessibility-first approach",
          description: "Ensured data visualizations maintained meaning for all users"
        }
      ],
      finalDesigns: [
        {
          title: "Desktop Dashboard",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Dashboard",
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Dark Mode Implementation",
          src: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500"
        }
      ]
    },
    outcomes: [
      {
        value: "94%",
        label: "Design system adoption across teams"
      },
      {
        value: "56%",
        label: "Improvement in task completion time"
      },
      {
        value: "78%",
        label: "Increase in data comprehension"
      }
    ],
    tools: [
      "Figma", "Design System", "Data Visualization", "UI Animation", 
      "Component Library", "Visual Design", "Design Tokens"
    ]
  },
  {
    id: "project4",
    title: "Wanderlust: Travel Booking Platform",
    focus: "Design Thinking Focus",
    challenge: "Creating an innovative travel booking platform that addresses the fragmented nature of trip planning and provides personalized recommendations.",
    role: "UX/UI Designer applying design thinking methodology throughout the project lifecycle.",
    timeline: "5 months (September 2021 - January 2022)",
    research: {
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
      methods: [
        "24 user interviews with diverse travelers",
        "Travel journey mapping sessions",
        "Competitive analysis of travel platforms",
        "Survey of 150 travelers on pain points",
        "Co-creation workshops with potential users"
      ],
      findings: [
        "Trip planning required using 4-6 different services",
        "Travelers struggled to find authentic local experiences",
        "Last-minute changes were difficult to accommodate",
        "Recommendations rarely matched personal preferences",
        "Trip information was scattered across multiple platforms"
      ]
    },
    design: {
      decisions: [
        {
          title: "AI-powered personalization",
          description: "Implemented recommendation engine based on user preferences and behavior"
        },
        {
          title: "Unified travel dashboard",
          description: "Created central hub for all travel information and bookings"
        },
        {
          title: "Flexible itinerary builder",
          description: "Designed tools for easy modification of travel plans"
        },
        {
          title: "Local experience discovery",
          description: "Incorporated curated authentic experiences from locals"
        }
      ],
      finalDesigns: [
        {
          title: "Discovery Experience",
          src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Booking Flow",
          src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Mobile Experience",
          src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "92%",
        label: "User satisfaction with planning process"
      },
      {
        value: "78%",
        label: "Reduction in planning time"
      },
      {
        value: "4.8/5",
        label: "App store rating"
      }
    ],
    tools: [
      "Figma", "Miro", "Design Thinking", "Journey Mapping", 
      "Workshop Facilitation", "Rapid Prototyping", "User Testing"
    ]
  },
  {
    id: "project5",
    title: "TeamFlow: Project Management Tool",
    focus: "Agile Collaboration Focus",
    challenge: "Designing a project management tool that enhances team collaboration and streamlines workflows for cross-functional teams using agile methodologies.",
    role: "Lead UX/UI Designer embedded in a multi-disciplinary agile team using Scrum methodology.",
    timeline: "8 months (February 2023 - September 2023)",
    research: {
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
      methods: [
        "Shadowing of 6 agile teams across industries",
        "Interviews with scrum masters and product owners",
        "Workflow analysis of existing project management tools",
        "Pain point identification workshops",
        "Prototype testing with agile teams"
      ],
      findings: [
        "Context switching between tools lowered productivity",
        "Collaboration features rarely aligned with agile ceremonies",
        "Visual representation of work was insufficient",
        "Onboarding new team members was time-consuming",
        "Integration with development tools was lacking"
      ]
    },
    design: {
      images: [
        {
          title: "Design and Development Collaboration",
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Remote Collaboration Session",
          src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        }
      ],
      decisions: [
        {
          title: "Agile-native interfaces",
          description: "Created specialized views for each Scrum ceremony"
        },
        {
          title: "Visual workflow management",
          description: "Designed intuitive kanban and sprint management boards"
        },
        {
          title: "Integrated collaboration",
          description: "Built-in video, chat, and document collaboration"
        },
        {
          title: "Developer tool integration",
          description: "Seamless connections with Git, CI/CD, and issue tracking"
        }
      ],
      finalDesigns: [
        {
          title: "Project Dashboard",
          src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Task Management",
          src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        },
        {
          title: "Team Collaboration",
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "32%",
        label: "Increase in team productivity"
      },
      {
        value: "45%",
        label: "Reduction in onboarding time"
      },
      {
        value: "98%",
        label: "Design system adoption"
      }
    ],
    tools: [
      "Figma", "Design System", "Jira", "Confluence", "Miro", 
      "Agile/Scrum", "User Story Mapping"
    ]
  }
];
