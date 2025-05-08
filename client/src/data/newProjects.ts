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

export interface Screen {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  linkTo?: string[];
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
  interactivePrototype: {
    webScreens: Screen[];
    mobileScreens: Screen[];
    defaultScreen: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "healthtrack",
    title: "HealthTrack - Medical Appointment Platform",
    focus: "UX Research & UI Design",
    challenge: "Design a user-friendly application that simplifies the process of finding doctors and scheduling medical appointments, reducing the friction and anxiety associated with healthcare access.",
    role: "Lead UX Designer",
    timeline: "8 weeks",
    research: {
      methods: [
        "User interviews with 25 patients across different demographics",
        "Competitive analysis of 5 existing healthcare platforms",
        "Card sorting sessions to determine information hierarchy",
        "Usability testing with wireframes"
      ],
      findings: [
        "Users found existing healthcare platforms confusing and overwhelming",
        "Doctor ratings and reviews were the most important factor in decision-making",
        "Users wanted clear visibility into doctor availability before starting the booking process",
        "The ability to filter by insurance acceptance was critical for US-based participants"
      ]
    },
    design: {
      decisions: [
        {
          title: "Minimalist UI with Clear Visual Hierarchy",
          description: "Used a clean interface with generous whitespace to reduce cognitive load. Important information like doctor specialties and availability was given visual prominence."
        },
        {
          title: "Two-Step Appointment Booking",
          description: "Reduced the traditional multi-step booking process to just two screens - doctor selection and appointment confirmation - to minimize user drop-off."
        },
        {
          title: "Hybrid Navigation System",
          description: "Implemented a combination of tab navigation and card-based content to create an intuitive flow that caters to both novice and experienced users."
        },
        {
          title: "Accessibility-First Color System",
          description: "Designed with high contrast ratios and added visual indicators beyond color to ensure the platform is usable by people with visual impairments."
        }
      ]
    },
    outcomes: [
      {
        value: "93%",
        label: "Usability test success rate"
      },
      {
        value: "87%",
        label: "of users found the booking process easier than competitors"
      },
      {
        value: "41%",
        label: "reduction in time to complete an appointment booking"
      },
      {
        value: "4.8/5",
        label: "average user satisfaction rating"
      }
    ],
    tools: ["Figma", "Maze", "Optimal Workshop", "Adobe Illustrator"],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "Home Dashboard",
          description: "Main dashboard with quick access to all features",
          image: "/images/healthtrack-web-home.png",
          linkTo: ["search", "doctor"]
        },
        {
          id: "search",
          title: "Doctor Search",
          description: "Find and filter doctors based on specialty, location, and availability",
          image: "/images/healthtrack-web-search.png",
          linkTo: ["home", "doctor"]
        },
        {
          id: "doctor",
          title: "Doctor Profile",
          description: "Detailed information about the doctor including experience, ratings, and reviews",
          image: "/images/healthtrack-web-doctor.png",
          linkTo: ["home", "search", "appointment"]
        },
        {
          id: "appointment",
          title: "Appointment Booking",
          description: "Select date, time, and reason for appointment",
          image: "/images/healthtrack-web-appointment.png",
          linkTo: ["doctor", "confirmed"]
        },
        {
          id: "confirmed",
          title: "Confirmation",
          description: "Appointment confirmation with details and next steps",
          image: "/images/healthtrack-web-confirmed.png",
          linkTo: ["home"]
        }
      ],
      mobileScreens: [
        {
          id: "home",
          title: "Home",
          description: "Main dashboard with upcoming appointments and quick actions",
          image: "/images/healthtrack-mobile-home.png",
          linkTo: ["search"]
        },
        {
          id: "search",
          title: "Find Doctor",
          description: "Search and browse available doctors",
          image: "/images/healthtrack-mobile-search.png",
          linkTo: ["home", "doctor"]
        },
        {
          id: "doctor",
          title: "Doctor Profile",
          description: "View doctor info and available time slots",
          image: "/images/healthtrack-mobile-doctor.png",
          linkTo: ["search", "appointment"]
        },
        {
          id: "appointment",
          title: "Book Appointment",
          description: "Enter appointment details",
          image: "/images/healthtrack-mobile-appointment.png",
          linkTo: ["doctor", "confirmed"]
        },
        {
          id: "confirmed",
          title: "Confirmation",
          description: "Booking confirmation and details",
          image: "/images/healthtrack-mobile-confirmed.png",
          linkTo: ["home"]
        }
      ]
    }
  },
  {
    id: "zenpay",
    title: "ZenPay - Digital Banking Experience",
    focus: "Product Design & UI Development",
    challenge: "Redesign a traditional banking application to create a modern, intuitive digital banking experience that makes financial management less stressful and more accessible to users of all ages.",
    role: "Senior Product Designer",
    timeline: "12 weeks",
    research: {
      methods: [
        "Quantitative analysis of user behavior in existing banking app",
        "User interviews with 35 participants across different age groups",
        "Contextual inquiry observing how users interact with banking apps",
        "A/B testing of different navigation patterns"
      ],
      findings: [
        "Older users (55+) struggled with dense information architecture in existing banking apps",
        "83% of users wanted faster access to their balance and recent transactions",
        "Security concerns were the primary source of anxiety when using mobile banking",
        "Users preferred simple terminology over banking jargon"
      ]
    },
    design: {
      decisions: [
        {
          title: "Simplified Information Architecture",
          description: "Reduced navigation depth and reorganized features based on frequency of use rather than traditional banking categories."
        },
        {
          title: "Prominent Security Features",
          description: "Made security controls more visible and accessible to help build user trust and confidence."
        },
        {
          title: "Progressive Disclosure",
          description: "Implemented a layered approach to information, showing essential data first with options to view more details as needed."
        },
        {
          title: "Visual Transaction History",
          description: "Redesigned transaction history with visual cues and categorization to help users understand their spending patterns at a glance."
        }
      ]
    },
    outcomes: [
      {
        value: "65%",
        label: "increase in daily active users"
      },
      {
        value: "42%",
        label: "reduction in customer support calls"
      },
      {
        value: "89%",
        label: "of users reported feeling more confident managing their finances"
      },
      {
        value: "4.7/5",
        label: "App Store rating (up from 3.2/5)"
      }
    ],
    tools: ["Figma", "Principle", "Amplitude", "UserTesting"],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "Dashboard",
          description: "Account overview with quick actions and spending insights",
          image: "/images/zenpay-web-home.png",
          linkTo: ["transfer", "accounts", "history"]
        },
        {
          id: "transfer",
          title: "Money Transfer",
          description: "Send money to accounts and contacts",
          image: "/images/zenpay-web-transfer.png",
          linkTo: ["home", "confirmation"]
        },
        {
          id: "confirmation",
          title: "Transfer Confirmation",
          description: "Verify and confirm transaction details",
          image: "/images/zenpay-web-confirmation.png",
          linkTo: ["transfer", "home"]
        },
        {
          id: "accounts",
          title: "My Accounts",
          description: "Manage accounts and cards",
          image: "/images/zenpay-web-accounts.png",
          linkTo: ["home"]
        },
        {
          id: "history",
          title: "Transaction History",
          description: "View and filter past transactions",
          image: "/images/zenpay-web-history.png",
          linkTo: ["home"]
        }
      ],
      mobileScreens: [
        {
          id: "home",
          title: "Home",
          description: "Account overview with balances and recent transactions",
          image: "/images/zenpay-mobile-home.png",
          linkTo: ["transfer", "accounts", "history"]
        },
        {
          id: "transfer",
          title: "Send Money",
          description: "Transfer funds to other accounts",
          image: "/images/zenpay-mobile-transfer.png",
          linkTo: ["home", "confirmation"]
        },
        {
          id: "confirmation",
          title: "Confirm Transfer",
          description: "Review and authorize transaction",
          image: "/images/zenpay-mobile-confirmation.png",
          linkTo: ["transfer", "home"]
        },
        {
          id: "accounts",
          title: "Accounts & Cards",
          description: "Manage financial accounts",
          image: "/images/zenpay-mobile-accounts.png",
          linkTo: ["home"]
        },
        {
          id: "history",
          title: "History",
          description: "Transaction history and spending analytics",
          image: "/images/zenpay-mobile-history.png",
          linkTo: ["home"]
        }
      ]
    }
  },
  {
    id: "ecoshop",
    title: "EcoShop - Sustainable E-commerce Platform",
    focus: "UX Research & Service Design",
    challenge: "Create an e-commerce experience that promotes sustainable products while making it easy for consumers to understand the environmental impact of their purchases.",
    role: "UX Researcher & Designer",
    timeline: "10 weeks",
    research: {
      methods: [
        "Survey of 500+ consumers on shopping habits and sustainability concerns",
        "Competitive analysis of existing eco-friendly marketplaces",
        "User journey mapping for different customer segments",
        "Prototype testing with 20 participants"
      ],
      findings: [
        "72% of users were confused by vague sustainability claims on products",
        "Price perception was the biggest barrier to purchasing sustainable products",
        "Users wanted transparent information about product origins and materials",
        "Social proof (reviews from other environmentally-conscious consumers) significantly influenced purchase decisions"
      ]
    },
    design: {
      decisions: [
        {
          title: "Standardized Sustainability Metrics",
          description: "Developed a clear visual system for communicating environmental impact across carbon footprint, water usage, and ethical labor practices."
        },
        {
          title: "Transparent Product Journey",
          description: "Created interactive maps showing supply chain and manufacturing locations for each product to build trust and transparency."
        },
        {
          title: "Impact Comparison Tool",
          description: "Implemented a feature allowing users to compare the environmental impact of similar products to make more informed choices."
        },
        {
          title: "Community Integration",
          description: "Designed a social component where users could share sustainable living tips and product recommendations to build community around eco-conscious consumption."
        }
      ]
    },
    outcomes: [
      {
        value: "56%",
        label: "increase in conversion rate for eco-friendly products"
      },
      {
        value: "78%",
        label: "of users reported better understanding of sustainability metrics"
      },
      {
        value: "3.2x",
        label: "increase in user-generated content about sustainable choices"
      },
      {
        value: "26%",
        label: "reduction in cart abandonment rate"
      }
    ],
    tools: ["Figma", "Miro", "Hotjar", "UserZoom"],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "Homepage",
          description: "Main landing page with featured sustainable products",
          image: "/images/ecoshop-web-home.png",
          linkTo: ["browse", "product"]
        },
        {
          id: "browse",
          title: "Browse Products",
          description: "Category browsing with sustainability filters",
          image: "/images/ecoshop-web-browse.png",
          linkTo: ["home", "product"]
        },
        {
          id: "product",
          title: "Product Details",
          description: "Detailed product information with sustainability metrics",
          image: "/images/ecoshop-web-product.png",
          linkTo: ["home", "browse", "impact", "cart"]
        },
        {
          id: "impact",
          title: "Environmental Impact",
          description: "Detailed breakdown of product's environmental footprint",
          image: "/images/ecoshop-web-impact.png",
          linkTo: ["product"]
        },
        {
          id: "cart",
          title: "Shopping Cart",
          description: "Cart review with total environmental impact calculation",
          image: "/images/ecoshop-web-cart.png",
          linkTo: ["product", "checkout"]
        }
      ],
      mobileScreens: [
        {
          id: "home",
          title: "Home",
          description: "Featured sustainable products and categories",
          image: "/images/ecoshop-mobile-home.png",
          linkTo: ["browse", "product"]
        },
        {
          id: "browse",
          title: "Browse",
          description: "Browse sustainable products by category",
          image: "/images/ecoshop-mobile-browse.png",
          linkTo: ["home", "product"]
        },
        {
          id: "product",
          title: "Product",
          description: "Product details with sustainability information",
          image: "/images/ecoshop-mobile-product.png",
          linkTo: ["home", "browse", "impact", "cart"]
        },
        {
          id: "impact",
          title: "Impact",
          description: "Environmental impact details and supply chain transparency",
          image: "/images/ecoshop-mobile-impact.png",
          linkTo: ["product"]
        },
        {
          id: "cart",
          title: "Cart",
          description: "Review cart items and environmental impact",
          image: "/images/ecoshop-mobile-cart.png",
          linkTo: ["product", "checkout"]
        }
      ]
    }
  },
  {
    id: "learnquest",
    title: "LearnQuest - Educational Platform for Kids",
    focus: "UI Design & User Testing",
    challenge: "Design an educational platform that makes learning engaging for children ages 6-12 while providing meaningful progress tracking for parents and teachers.",
    role: "UI/UX Designer",
    timeline: "14 weeks",
    research: {
      methods: [
        "Co-design sessions with elementary school teachers and education experts",
        "Observation studies with children using existing educational apps",
        "Parent interviews about monitoring children's educational progress",
        "Prototype testing with 30 children and their parents"
      ],
      findings: [
        "Children were most engaged when learning felt like play rather than structured lessons",
        "Reading comprehension improved when children could choose topics they were interested in",
        "Parents wanted detailed insights into strengths and areas for improvement",
        "Teachers needed customization options to align content with their curriculum"
      ]
    },
    design: {
      decisions: [
        {
          title: "Age-Appropriate UI Elements",
          description: "Designed interface elements with appropriate sizing, spacing, and interaction patterns based on children's motor skills and cognitive development at different ages."
        },
        {
          title: "Adaptive Learning Paths",
          description: "Created a system that adjusts difficulty based on the child's performance to maintain an optimal challenge level without causing frustration."
        },
        {
          title: "Dual Interface System",
          description: "Developed separate but connected interfaces for children and adults, with the child's view focusing on fun and exploration while the parent/teacher view emphasized progress tracking and insights."
        },
        {
          title: "Reward-Based Progress System",
          description: "Implemented a meaningful reward system that celebrated learning milestones without creating dependency on extrinsic motivation."
        }
      ]
    },
    outcomes: [
      {
        value: "82%",
        label: "of children remained engaged for the entire session"
      },
      {
        value: "76%",
        label: "of parents reported better insights into their child's learning"
      },
      {
        value: "34%",
        label: "improvement in subject matter retention"
      },
      {
        value: "29",
        label: "minutes average session length (vs. 18 min industry average)"
      }
    ],
    tools: ["Figma", "Principle", "Lookback", "Adobe Illustrator"],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "Child Dashboard",
          description: "Personalized learning journey with fun visual elements",
          image: "/images/learnquest-web-home.png",
          linkTo: ["subjects", "activity"]
        },
        {
          id: "subjects",
          title: "Choose Subject",
          description: "Browse available subjects in an engaging visual format",
          image: "/images/learnquest-web-subjects.png",
          linkTo: ["home", "activity"]
        },
        {
          id: "activity",
          title: "Learning Activity",
          description: "Interactive educational activity with games and challenges",
          image: "/images/learnquest-web-activity.png",
          linkTo: ["home", "subjects", "reward"]
        },
        {
          id: "reward",
          title: "Achievement Earned",
          description: "Celebration of completed activities and rewards",
          image: "/images/learnquest-web-reward.png",
          linkTo: ["activity", "home"]
        },
        {
          id: "parent",
          title: "Parent Dashboard",
          description: "Progress tracking and insights for parents",
          image: "/images/learnquest-web-parent.png",
          linkTo: ["home"]
        }
      ],
      mobileScreens: [
        {
          id: "home",
          title: "Home",
          description: "Main dashboard with learning journey map",
          image: "/images/learnquest-mobile-home.png",
          linkTo: ["subjects", "activity"]
        },
        {
          id: "subjects",
          title: "Subjects",
          description: "Subject selection with progress indicators",
          image: "/images/learnquest-mobile-subjects.png",
          linkTo: ["home", "activity"]
        },
        {
          id: "activity",
          title: "Activity",
          description: "Interactive learning activity",
          image: "/images/learnquest-mobile-activity.png",
          linkTo: ["home", "subjects", "reward"]
        },
        {
          id: "reward",
          title: "Reward",
          description: "Achievement celebration screen",
          image: "/images/learnquest-mobile-reward.png",
          linkTo: ["activity", "home"]
        },
        {
          id: "parent",
          title: "Parent View",
          description: "Analytics and progress tracking for parents",
          image: "/images/learnquest-mobile-parent.png",
          linkTo: ["home"]
        }
      ]
    }
  },
  {
    id: "teamsync",
    title: "TeamSync - Remote Collaboration Tool",
    focus: "UX Design & Design System Development",
    challenge: "Create a collaboration platform that addresses the unique challenges of remote teams, focusing on asynchronous communication, time zone management, and building team cohesion without physical presence.",
    role: "Lead UX Designer & Design System Architect",
    timeline: "16 weeks",
    research: {
      methods: [
        "Surveys and interviews with 200+ remote workers across industries",
        "Remote work diary studies with 25 participants",
        "Competitive analysis of existing collaboration tools",
        "Team workshops on pain points in distributed collaboration"
      ],
      findings: [
        "Lack of visibility into teammates' workloads and availability was the top challenge",
        "Context switching between multiple tools caused significant productivity loss",
        "Time zone differences led to communication delays and misaligned expectations",
        "Remote workers reported feeling disconnected from company culture and team dynamics"
      ]
    },
    design: {
      decisions: [
        {
          title: "Unified Workspace Architecture",
          description: "Designed a hub-and-spoke model that centralized team communication while allowing seamless integration with specialized tools for specific workflows."
        },
        {
          title: "Time Zone Intelligent Interface",
          description: "Created an interface that dynamically adjusted to show optimal meeting times, teammate availability, and expected response times based on global team distribution."
        },
        {
          title: "Comprehensive Design System",
          description: "Developed a flexible, component-based design system that ensured consistency across features while supporting future scalability and extensibility."
        },
        {
          title: "Presence Without Surveillance",
          description: "Implemented subtle ambient awareness features that conveyed team activity and availability without creating privacy concerns or surveillance anxiety."
        }
      ]
    },
    outcomes: [
      {
        value: "62%",
        label: "reduction in time spent context switching between tools"
      },
      {
        value: "45%",
        label: "decrease in reported communication friction"
      },
      {
        value: "58%",
        label: "of users reported stronger connection with remote teammates"
      },
      {
        value: "27%",
        label: "increase in asynchronous collaboration efficiency"
      }
    ],
    tools: ["Figma", "Framer", "Storybook", "Optimal Workshop"],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "Team Hub",
          description: "Central dashboard with team activity and global awareness",
          image: "/images/teamsync-web-home.png",
          linkTo: ["projects", "messages", "presence"]
        },
        {
          id: "projects",
          title: "Projects Overview",
          description: "Visual project management with time zone indicators",
          image: "/images/teamsync-web-projects.png",
          linkTo: ["home", "tasks"]
        },
        {
          id: "tasks",
          title: "Task Management",
          description: "Collaborative task tracking with priority and time estimates",
          image: "/images/teamsync-web-tasks.png",
          linkTo: ["projects", "messages"]
        },
        {
          id: "messages",
          title: "Team Communication",
          description: "Asynchronous and real-time communication unified",
          image: "/images/teamsync-web-messages.png",
          linkTo: ["home", "presence"]
        },
        {
          id: "presence",
          title: "Team Presence",
          description: "Global team availability and time zone management",
          image: "/images/teamsync-web-presence.png",
          linkTo: ["home", "messages"]
        }
      ],
      mobileScreens: [
        {
          id: "home",
          title: "Home",
          description: "Activity feed and team status",
          image: "/images/teamsync-mobile-home.png",
          linkTo: ["projects", "messages", "presence"]
        },
        {
          id: "projects",
          title: "Projects",
          description: "Project tracking and updates",
          image: "/images/teamsync-mobile-projects.png",
          linkTo: ["home", "tasks"]
        },
        {
          id: "tasks",
          title: "Tasks",
          description: "Personal and team tasks management",
          image: "/images/teamsync-mobile-tasks.png",
          linkTo: ["projects", "home"]
        },
        {
          id: "messages",
          title: "Messages",
          description: "Communication hub with time zone awareness",
          image: "/images/teamsync-mobile-messages.png",
          linkTo: ["home", "presence"]
        },
        {
          id: "presence",
          title: "Presence",
          description: "Team availability across time zones",
          image: "/images/teamsync-mobile-presence.png",
          linkTo: ["home", "messages"]
        }
      ]
    }
  }
];