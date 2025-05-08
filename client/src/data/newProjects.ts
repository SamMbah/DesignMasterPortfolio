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
    id: "project1",
    title: "ZenPay: Digital Banking App Redesign",
    focus: "UX Research Focus",
    challenge: "Redesigning Zenith Bank's digital banking platform to improve user satisfaction, reduce drop-off rates during transactions, and increase feature adoption among users aged 45+.",
    role: "Lead UX Researcher and Designer working across multiple teams including product, development, and marketing.",
    timeline: "6 months (January 2022 - June 2022)",
    research: {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "User interviews with 24 customers across different demographics",
        "Usability testing sessions with 16 participants",
        "Customer journey mapping workshops with internal stakeholders",
        "Analytics review of drop-off points in the transaction flow",
        "Competitive analysis of 6 banking applications"
      ],
      findings: [
        "Users over 45 struggled with complex navigation and technical terminology",
        "Transaction confirmation screens lacked clarity, causing anxiety and repeated actions",
        "Users had difficulty locating frequently used features",
        "Authentication process was perceived as cumbersome with too many steps",
        "Mobile performance issues on older devices led to transaction abandonment"
      ]
    },
    design: {
      images: [
        {
          title: "User Journey Map",
          src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        },
        {
          title: "Wireframes",
          src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        },
        {
          title: "Usability Testing",
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        }
      ],
      decisions: [
        {
          title: "Simplified navigation",
          description: "Reduced menu depth and implemented a customizable quick-access dashboard"
        },
        {
          title: "Transaction clarity",
          description: "Redesigned transaction flows with explicit confirmation steps and status indicators"
        },
        {
          title: "Personalized experience",
          description: "Created user-specific views and simplified language based on user profiles"
        },
        {
          title: "Streamlined authentication",
          description: "Introduced biometric options and remembered devices functionality"
        }
      ],
      finalDesigns: [
        {
          title: "Dashboard - Web",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile App Experience",
          src: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "30%",
        label: "Increase in user satisfaction scores"
      },
      {
        value: "42%",
        label: "Reduction in transaction abandonment"
      },
      {
        value: "28%",
        label: "Increase in feature adoption among users 45+"
      }
    ],
    tools: [
      "Figma", "User Interviews", "Usability Testing", "Journey Mapping", 
      "Google Analytics", "Miro", "Maze", "Optimal Workshop"
    ],
    interactivePrototype: {
      defaultScreen: "dashboard",
      webScreens: [
        {
          id: "dashboard",
          title: "Dashboard",
          description: "The redesigned dashboard features a customizable widget system with the most frequently used functions displayed prominently.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["transfer", "accounts", "profile"]
        },
        {
          id: "transfer",
          title: "Funds Transfer",
          description: "Simplified transfer flow with clear indication of steps and progress.",
          image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["confirmation", "dashboard"]
        },
        {
          id: "confirmation",
          title: "Transfer Confirmation",
          description: "Redesigned confirmation screen with clear success indicators and next action options.",
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "accounts"]
        },
        {
          id: "accounts",
          title: "Accounts Overview",
          description: "Consolidated view of all user accounts with quick-action capabilities.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["transfer", "dashboard"]
        },
        {
          id: "profile",
          title: "User Profile",
          description: "Simplified user profile with accessibility options and personalization settings.",
          image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "accounts"]
        }
      ],
      mobileScreens: [
        {
          id: "m-dashboard",
          title: "Mobile Dashboard",
          description: "Mobile-optimized dashboard with touch-friendly targets and essential functions.",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-transfer", "m-accounts", "m-profile"]
        },
        {
          id: "m-transfer",
          title: "Mobile Transfer",
          description: "Streamlined mobile transfer process with large input fields and clear CTAs.",
          image: "https://images.unsplash.com/photo-1616077167559-605dd8a9455e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-confirmation", "m-dashboard"]
        },
        {
          id: "m-confirmation",
          title: "Mobile Confirmation",
          description: "Clear confirmation with haptic feedback and animation for successful transactions.",
          image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-accounts"]
        },
        {
          id: "m-accounts",
          title: "Mobile Accounts",
          description: "Swipeable account cards with transaction history and quick actions.",
          image: "https://images.unsplash.com/photo-1564427468650-47840a77528f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-transfer", "m-dashboard"]
        },
        {
          id: "m-profile",
          title: "Mobile Profile",
          description: "Mobile profile with biometric settings and personalization options.",
          image: "https://images.unsplash.com/photo-1573497019236-61f35a392084?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-accounts"]
        }
      ]
    }
  },
  {
    id: "project2",
    title: "HealthTrack: Patient Monitoring Platform",
    focus: "UX Design Focus",
    challenge: "Designing an intuitive health monitoring platform that enables patients to track chronic conditions while providing healthcare providers with actionable insights for preventative care.",
    role: "UX Designer leading the research and design process in collaboration with healthcare providers and technical teams.",
    timeline: "5 months (August 2022 - December 2022)",
    research: {
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "Contextual inquiry with 10 patients managing chronic conditions",
        "Interviews with 8 healthcare providers",
        "Competitive analysis of health tracking applications",
        "Co-design workshops with patients and medical professionals",
        "Usability testing with low-fidelity prototypes"
      ],
      findings: [
        "Patients struggled with consistency in data entry, leading to incomplete health records",
        "Healthcare providers needed better data visualization to quickly identify trends",
        "Privacy concerns affected willingness to share certain health metrics",
        "Reminder systems were often ignored or turned off by users",
        "Integration with existing medical systems was critical for provider adoption"
      ]
    },
    design: {
      images: [
        {
          title: "User Personas",
          src: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        },
        {
          title: "Information Architecture",
          src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
        }
      ],
      decisions: [
        {
          title: "Simplified data entry",
          description: "Created one-tap tracking interfaces with smart defaults based on historical patterns"
        },
        {
          title: "Contextual reminders",
          description: "Developed an adaptive reminder system that learns from user behavior patterns"
        },
        {
          title: "Visualized insights",
          description: "Designed dynamic data visualizations showing correlations between different health metrics"
        },
        {
          title: "Privacy controls",
          description: "Implemented granular sharing controls giving patients ownership of their health data"
        }
      ],
      finalDesigns: [
        {
          title: "Dashboard View",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Experience",
          src: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "86%",
        label: "Increase in consistent tracking adherence"
      },
      {
        value: "34%",
        label: "Reduction in missed appointments"
      },
      {
        value: "78%",
        label: "Provider satisfaction with data insights"
      }
    ],
    tools: [
      "Figma", "Design System", "Usability Testing", "Prototyping",
      "User Journey Mapping", "Information Architecture", "Miro"
    ],
    interactivePrototype: {
      defaultScreen: "dashboard",
      webScreens: [
        {
          id: "dashboard",
          title: "Patient Dashboard",
          description: "Personalized dashboard showing health metrics, upcoming appointments, and medication schedule at a glance.",
          image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["metrics", "appointments", "medications"]
        },
        {
          id: "metrics",
          title: "Health Metrics",
          description: "Intuitive visualization of health data with correlation analysis between different metrics.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["trends", "dashboard"]
        },
        {
          id: "trends",
          title: "Health Trends Analysis",
          description: "Long-term trend view with predictive insights based on historical health data.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["metrics", "dashboard"]
        },
        {
          id: "appointments",
          title: "Appointment Management",
          description: "Interactive calendar with appointment scheduling, reminders, and preparation instructions.",
          image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "metrics"]
        },
        {
          id: "medications",
          title: "Medication Tracking",
          description: "Medication management with smart reminders, refill tracking, and side effect reporting.",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "appointments"]
        }
      ],
      mobileScreens: [
        {
          id: "m-dashboard",
          title: "Mobile Dashboard",
          description: "Compact health dashboard optimized for quick daily check-ins on mobile devices.",
          image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-metrics", "m-appointments", "m-medications"]
        },
        {
          id: "m-metrics",
          title: "Mobile Health Metrics",
          description: "Touch-optimized health tracking with one-tap data entry and immediate visual feedback.",
          image: "https://images.unsplash.com/photo-1616077167559-605dd8a9455e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-trends", "m-dashboard"]
        },
        {
          id: "m-trends",
          title: "Mobile Health Trends",
          description: "Mobile-optimized trend visualizations with pinch-to-zoom and time period selection.",
          image: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-metrics", "m-dashboard"]
        },
        {
          id: "m-appointments",
          title: "Mobile Appointments",
          description: "Appointment management with calendar integration and location-based reminders.",
          image: "https://images.unsplash.com/photo-1564427468650-47840a77528f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-metrics"]
        },
        {
          id: "m-medications",
          title: "Mobile Medications",
          description: "Medication tracking with barcode scanning, dose scheduling, and smart notifications.",
          image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-appointments"]
        }
      ]
    }
  },
  {
    id: "project3",
    title: "EcoShop: Sustainable E-commerce Platform",
    focus: "UI Design Focus",
    challenge: "Creating a visually appealing e-commerce platform focused on sustainable products while effectively communicating eco-credentials and impact metrics to environmentally conscious consumers.",
    role: "UI Designer working with UX team, sustainability experts, and e-commerce specialists.",
    timeline: "4 months (February 2023 - May 2023)",
    research: {
      methods: [
        "Visual competitive analysis of sustainable e-commerce platforms",
        "User preference testing with eco-conscious consumers",
        "Card sorting for product categorization",
        "A/B testing of different visual sustainability indicators",
        "Stakeholder interviews on brand identity and eco-values"
      ],
      findings: [
        "Users struggled to verify the authenticity of sustainability claims",
        "Product comparison tools lacked environmental impact information",
        "Visual indicators of sustainability varied widely and caused confusion",
        "Users wanted transparency about product sourcing and supply chain",
        "Eco-conscious shoppers responded well to impact visualization"
      ]
    },
    design: {
      images: [
        {
          title: "Visual Design System",
          src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
        }
      ],
      decisions: [
        {
          title: "Unified eco-credentials system",
          description: "Created standardized visual indicators for different types of sustainability certifications"
        },
        {
          title: "Impact visualization",
          description: "Developed interactive elements showing the environmental impact of purchases"
        },
        {
          title: "Nature-inspired color system",
          description: "Implemented a biophilic color palette that maintains WCAG AA+ compliance"
        },
        {
          title: "Supply chain transparency",
          description: "Designed visual journey maps showing product origins and manufacturing processes"
        }
      ],
      finalDesigns: [
        {
          title: "Product Listing Page",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Shopping Experience",
          src: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "42%",
        label: "Increase in average order value"
      },
      {
        value: "68%",
        label: "Users reported high trust in sustainability claims"
      },
      {
        value: "37%",
        label: "Increase in returning customers"
      }
    ],
    tools: [
      "Figma", "Design System", "Visual Design", "Color Theory", 
      "Typography", "Component Library", "A/B Testing"
    ],
    interactivePrototype: {
      defaultScreen: "home",
      webScreens: [
        {
          id: "home",
          title: "EcoShop Homepage",
          description: "Homepage showcasing featured sustainable products with impact metrics prominently displayed.",
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["category", "product", "impact"]
        },
        {
          id: "category",
          title: "Product Category",
          description: "Category view with sustainability filters and eco-certification badges on product cards.",
          image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["product", "home"]
        },
        {
          id: "product",
          title: "Product Detail",
          description: "Detailed product view with transparent supply chain information and environmental impact data.",
          image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["cart", "category", "home"]
        },
        {
          id: "cart",
          title: "Shopping Cart",
          description: "Cart with cumulative environmental impact visualization and sustainable packaging options.",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["checkout", "product"]
        },
        {
          id: "impact",
          title: "Impact Dashboard",
          description: "Personal impact dashboard showing environmental benefits from past purchases.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["home", "category"]
        },
        {
          id: "checkout",
          title: "Eco-Friendly Checkout",
          description: "Checkout process with carbon-offset options and sustainable delivery choices.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["confirmation", "cart"]
        },
        {
          id: "confirmation",
          title: "Order Confirmation",
          description: "Confirmation screen with environmental impact summary of the purchase.",
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["home", "impact"]
        }
      ],
      mobileScreens: [
        {
          id: "m-home",
          title: "Mobile Homepage",
          description: "Mobile-optimized homepage with prominent sustainability messaging and featured products.",
          image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-category", "m-product", "m-impact"]
        },
        {
          id: "m-category",
          title: "Mobile Category View",
          description: "Touch-friendly product category browsing with eco-filter quick toggles.",
          image: "https://images.unsplash.com/photo-1616077167559-605dd8a9455e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-product", "m-home"]
        },
        {
          id: "m-product",
          title: "Mobile Product Detail",
          description: "Swipeable product images with sticky eco-badges and expandable sustainability information.",
          image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-cart", "m-category"]
        },
        {
          id: "m-cart",
          title: "Mobile Shopping Cart",
          description: "Mobile cart with prominent impact metrics and easy checkout access.",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-checkout", "m-product"]
        },
        {
          id: "m-impact",
          title: "Mobile Impact View",
          description: "Personal environmental impact tracker optimized for mobile viewing.",
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-home", "m-category"]
        },
        {
          id: "m-checkout",
          title: "Mobile Checkout",
          description: "Streamlined mobile checkout with eco-delivery options and carbon offsetting.",
          image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-confirmation", "m-cart"]
        },
        {
          id: "m-confirmation",
          title: "Mobile Confirmation",
          description: "Order confirmation with shareable environmental impact achievements.",
          image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-home", "m-impact"]
        }
      ]
    }
  },
  {
    id: "project4",
    title: "LearnQuest: Educational Platform Redesign",
    focus: "Design Thinking Focus",
    challenge: "Reimagining an educational platform to improve engagement, knowledge retention, and course completion rates across diverse learning styles and accessibility needs.",
    role: "UX/UI Designer applying design thinking methodology throughout the product development lifecycle.",
    timeline: "7 months (July 2021 - January 2022)",
    research: {
      image: "https://images.unsplash.com/photo-1427104227401-94b390b378b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "Empathy interviews with 15 learners of different backgrounds",
        "Diary studies tracking learning habits over 3 weeks",
        "Co-creation workshops with educators and students",
        "Prototype testing across different devices and contexts",
        "Competitive analysis of educational platforms"
      ],
      findings: [
        "Learners struggled to maintain motivation without clear progress indicators",
        "Different learning styles weren't accommodated in the existing platform",
        "Mobile learning experience was significantly compromised",
        "Social learning components were underutilized despite their effectiveness",
        "Accessibility issues created barriers for many potential users"
      ]
    },
    design: {
      decisions: [
        {
          title: "Adaptive learning paths",
          description: "Created personalized learning journeys based on learning style and pace"
        },
        {
          title: "Progress visualization",
          description: "Developed motivating progress indicators showing both completion and comprehension"
        },
        {
          title: "Multi-modal content delivery",
          description: "Implemented options for visual, auditory, and interactive learning for each module"
        },
        {
          title: "Social learning components",
          description: "Designed collaborative learning spaces with peer review and group challenges"
        }
      ],
      finalDesigns: [
        {
          title: "Learning Dashboard",
          src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Learning Experience",
          src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "64%",
        label: "Increase in course completion rates"
      },
      {
        value: "87%",
        label: "Users reported better knowledge retention"
      },
      {
        value: "42%",
        label: "Growth in daily active users"
      }
    ],
    tools: [
      "Figma", "Miro", "Design Thinking", "Journey Mapping", 
      "Workshop Facilitation", "Rapid Prototyping", "User Testing"
    ],
    interactivePrototype: {
      defaultScreen: "dashboard",
      webScreens: [
        {
          id: "dashboard",
          title: "Learning Dashboard",
          description: "Personalized learning dashboard with adaptive recommendations and clear progress visualization.",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["course", "progress", "social"]
        },
        {
          id: "course",
          title: "Course View",
          description: "Course interface with multi-modal content delivery options for different learning preferences.",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["lesson", "dashboard"]
        },
        {
          id: "lesson",
          title: "Interactive Lesson",
          description: "Engaging lesson format with interactive elements, comprehension checks, and accessibility features.",
          image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["assessment", "course"]
        },
        {
          id: "assessment",
          title: "Knowledge Check",
          description: "Adaptive assessment that adjusts difficulty based on learner responses with immediate feedback.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["progress", "course"]
        },
        {
          id: "progress",
          title: "Learning Progress",
          description: "Comprehensive progress tracking with skill mastery visualization and learning analytics.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "social"]
        },
        {
          id: "social",
          title: "Learning Community",
          description: "Social learning environment with discussion forums, peer collaboration, and mentor connections.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["dashboard", "course"]
        }
      ],
      mobileScreens: [
        {
          id: "m-dashboard",
          title: "Mobile Learning Dashboard",
          description: "Mobile-optimized dashboard with focus on current courses and quick resume functionality.",
          image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-course", "m-progress", "m-social"]
        },
        {
          id: "m-course",
          title: "Mobile Course View",
          description: "Streamlined mobile course experience with offline capability and bite-sized content segments.",
          image: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-lesson", "m-dashboard"]
        },
        {
          id: "m-lesson",
          title: "Mobile Lesson",
          description: "Mobile lesson experience designed for on-the-go learning with audio options and quick bookmarking.",
          image: "https://images.unsplash.com/photo-1602536546532-9d2c4e429168?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-assessment", "m-course"]
        },
        {
          id: "m-assessment",
          title: "Mobile Knowledge Check",
          description: "Touch-optimized assessment with swipe controls and quick-answer functionality.",
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-progress", "m-course"]
        },
        {
          id: "m-progress",
          title: "Mobile Progress Tracking",
          description: "Simplified progress visualization optimized for mobile screens with achievement celebrations.",
          image: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-social"]
        },
        {
          id: "m-social",
          title: "Mobile Learning Community",
          description: "Mobile-optimized social learning features with push notifications for community engagement.",
          image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-dashboard", "m-course"]
        }
      ]
    }
  },
  {
    id: "project5",
    title: "TeamSync: Enterprise Collaboration Tool",
    focus: "Agile Collaboration Focus",
    challenge: "Creating an enterprise collaboration tool that streamlines communication, document management, and project coordination for cross-functional teams working in agile environments.",
    role: "Lead UX Designer embedded within an agile development team, collaborating with product owners, developers, and stakeholders.",
    timeline: "8 months (March 2020 - October 2020)",
    research: {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      methods: [
        "Stakeholder interviews across 5 departments",
        "Shadow sessions with teams during their daily workflows",
        "Collaborative design workshops with future users",
        "Prototype testing in real work environments",
        "Analysis of existing collaboration pain points"
      ],
      findings: [
        "Information silos were causing duplication of work and communication issues",
        "Context switching between different tools decreased productivity",
        "Document version control was a significant pain point",
        "Remote team members felt disconnected from in-office collaboration",
        "Decision tracking and accountability was difficult to maintain"
      ]
    },
    design: {
      images: [
        {
          title: "Collaborative Design Workshop",
          src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
        }
      ],
      decisions: [
        {
          title: "Unified workspace",
          description: "Created a central hub integrating communication, documents, and project management"
        },
        {
          title: "Contextual collaboration",
          description: "Designed document-centric collaboration with integrated discussions and decisions"
        },
        {
          title: "Presence awareness",
          description: "Implemented real-time indicators of team availability and activities"
        },
        {
          title: "Knowledge capture",
          description: "Created automatic documentation of decisions and action items from meetings"
        }
      ],
      finalDesigns: [
        {
          title: "Team Workspace",
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Mobile Collaboration",
          src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
        }
      ]
    },
    outcomes: [
      {
        value: "32%",
        label: "Reduction in meeting time"
      },
      {
        value: "47%",
        label: "Decrease in context switching"
      },
      {
        value: "78%",
        label: "Teams reported improved information sharing"
      }
    ],
    tools: [
      "Figma", "Design System", "Agile Methodologies", "Jira", 
      "GitHub", "Usability Testing", "Collaborative Design"
    ],
    interactivePrototype: {
      defaultScreen: "workspace",
      webScreens: [
        {
          id: "workspace",
          title: "Team Workspace",
          description: "Centralized team workspace bringing together all projects, communications, and resources in one unified interface.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["project", "documents", "communication"]
        },
        {
          id: "project",
          title: "Project Management",
          description: "Agile project tracking with customizable workflows, sprint planning, and team assignments.",
          image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["tasks", "workspace"]
        },
        {
          id: "tasks",
          title: "Task Management",
          description: "Task detail view with integrated context, discussions, and workflow transitions.",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["project", "documents"]
        },
        {
          id: "documents",
          title: "Document Collaboration",
          description: "Real-time document editing with version control, comments, and decision tracking.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["workspace", "project"]
        },
        {
          id: "communication",
          title: "Team Communication",
          description: "Contextual messaging linked to projects and documents with presence awareness.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["meetings", "workspace"]
        },
        {
          id: "meetings",
          title: "Meeting Management",
          description: "Meeting scheduling, agendas, notes, and automatic action item tracking.",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
          linkTo: ["communication", "workspace"]
        }
      ],
      mobileScreens: [
        {
          id: "m-workspace",
          title: "Mobile Workspace",
          description: "Mobile team workspace with activity feeds and quick access to current projects.",
          image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-project", "m-documents", "m-communication"]
        },
        {
          id: "m-project",
          title: "Mobile Project View",
          description: "Mobile-optimized project tracking with touch-friendly status updates and filters.",
          image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-tasks", "m-workspace"]
        },
        {
          id: "m-tasks",
          title: "Mobile Task Management",
          description: "Task management with swipe actions and quick task creation for on-the-go productivity.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-project", "m-documents"]
        },
        {
          id: "m-documents",
          title: "Mobile Document Access",
          description: "Mobile document viewer with offline access and commenting functionality.",
          image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-workspace", "m-communication"]
        },
        {
          id: "m-communication",
          title: "Mobile Communication",
          description: "Mobile messaging with rich media sharing and push notifications.",
          image: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-meetings", "m-workspace"]
        },
        {
          id: "m-meetings",
          title: "Mobile Meetings",
          description: "Mobile meeting tools with audio call integration and quick minute taking.",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800",
          linkTo: ["m-communication", "m-workspace"]
        }
      ]
    }
  }
];