import { Icons } from "@/components/icons";
import { UserRound, CalendarDays , Music } from "lucide-react";

export const DATA = {
  name: "Muqeeth",
  initials: "Sammy",
  url: "https://syedabdulmuqeeth.com",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Thinker, Maker, & Doer",
  summary:
    "Gets Curious ,Learns builds & Circle Back",
  avatarUrl: "/images/profile/syed-abdul-muqeeth.jpeg",
  skills: [
    "A2UI",
    "React",
    "React Native",
    "Next.js",
    "Expo",
    "Typescript",
    "Ollama",
    "Github",
    "N8N",
    "Hugging Face",
    "LLM'S",
    "LangChain",
    "FineTuning",
    "CMS",
    "RAG",
    "Node.js",
    "MongoDB",
    "Casandra",
    "Python",
    "Dijango",
    "Flask",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "Cybersecurity",
    "E-Commerce",
    "Data Analytics",
    "Full Stack Development",
    "DevOps",
    "Deep Learning",
    "UX Design",
    "Digital Marketing",
    "AutoCAD",
    "LabView",
    "Adobe Photoshop",
    "LightRoom",
    "PostMan",
    "Figma",
    "Blender",
    "Unreal Engine 5",
    "3D Printing",
    "CAD",
    "CAM",
    "CNC",
    "Laser Cutting",
    "3D Scanning & Modeling",
    "Convex DB",
    "CockroachDB",
    "Space Time DB",
    "Supabase DB",
  ],
  navbar: [
    { href: "/documents/syed-abdul-muqeeth-resume.pdf", icon: UserRound, label: "Resume" },
    {
      href: "https://cal.com/ungaaaabungaaaa/quickchat",
      icon: CalendarDays,
      label: "Meet",
    },
  ],
  contact: {
    email: "syed_abdul_muqeeth@proton.me",
    tel: "+91 9845000000",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/syed-abdul-muqeeth-8173a024b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:syed_abdul_muqeeth@proton.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [

    {
      company: "IMAI.STUDIO",
      href: "https://imai.studio/",
      badges: [],
      location: "USA California · Hybrid",
      title: "AI Research Engineer",
      logoUrl: "/images/logos/imai-studio.png",
      start: "May 2025",
      end: "Present",
      description:
        "Building ChatAdapters to extend our platforms capabilities across Node-based platforms like Telegram, WhatsApp, Discord, and Slack  powered by the Vercel SDK. Currently tinkering with Stagehand to give our agent the ability to scrape any website and understand its design language. Using OpenRouter and enabling voice transcription to remove the friction of typing & exploring a lot more along the way. Also adding REST API endpoints so external platforms can leverage our agent as extensions. On the side, building a foundation model tailored for designers.",
    },

    {
      company: "Kemuri Pvt Ltd",
      href: "https://kemuri.in/",
      badges: [],
      location: "Bengaluru, Karnataka, India · Remote",
      title: "Software Enginner",
      logoUrl: "/images/logos/kemuri.png",
      start: "Dec 2024",
      end: "May 2025 · 6 mos",
      description:
        "Contributing to projects like Kuruco, a cloud-native service enabling front-end engineers to build high-performance, customizable solutions seamlessly integrated with external APIs. Looking forward to growing & making an impact with this dynamic team!",
    },
    {
      company: "CineFirm Pvt Ltd",
      href: "https://cinefirm.in",
      badges: [],
      location: "Bengaluru, Karnataka, India · Remote",
      title: "Full Stack Developer",
      logoUrl: "/images/logos/cinefirm.png",
      start: "Sep 2024",
      end: "Dec 2024 · 3 mos",
      description:
        "Built a Next.js web app for Cinefirm to showcase their photography and videography services,\n along with a responsive booking system to onboard clients and schedule shoots seamlessly.\nLeveraging GSAP for smooth animations, Vercel for hosting, and the power of the Next.js framework,\nthe platform highlights Cinefirm's expertise in both event shoots and brand design,\nensuring all client needs are met with precision and creativity",
    },
    {
      company: "Ammas Pastries Pvt Ltd",
      badges: [],
      href: "https://ammaspastries.in/",
      location: "Kothanur · Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/images/logos/ammas-pastries.png",
      start: "Jul 2023",
      end: "Aug 2024 · 1 yr 2 mos",
      description:
        "Led the development of innovative web solutions tailored for the bakery industry.\nSpecializing in creating custom, scalable technology that enhances user experience and operational efficiency.\nReact Migration: Migrated the website to a React platform, significantly improving performance and user experience.\nNext.js Development: Built a comprehensive React application using Next.js, boosting functionality and SEO.\nWordPress Integration: Integrated WordPress CRM with the React app using REST APIs for streamlined content management and payment processing.\nPayment Solutions: Implemented cloud functions for secure Razorpay payment transactions.\nSEO & Accessibility: Enhanced website SEO and accessibility to improve reach and compliance.\nCentralized TV System: Developed a TV system for displaying new product launches in stores, increasing customer engagement.\nDynamic Delivery Charges: Integrated location-based delivery charges for precise and transparent cost calculation.",
    },
    {
      company: "Hindustan Aeronautics Limited - HAL",
      href: "https://www.hal-india.co.in/",
      badges: [],
      location: "HAL Airport · On-site",
      title: "Engineer Intern",
      logoUrl: "/images/logos/hal.png",
      start: "Jul 2022",
      end: "Aug 2022 · 2 mos",
      description:
        "Assisting in the design and development of aerospace components.\nConducting research and analysis on various engineering projects.\nCollaborating with cross-functional teams to support ongoing projects.\nParticipating in technical discussions and providing innovative solutions.\nGaining hands-on experience with industry-standard tools and technologies.\nThis internship provided me with a deeper understanding of aerospace engineering and enhanced my technical and problem-solving skills",
    },
  ],
 education: [
  {
    school: "Reva University",
    href: "https://www.reva.edu.in/",
    degree: "B.Tech in Mechatronics Engineering",
    logoUrl: "/images/education/reva-university.png",
    start: "2019",
    end: "2023",
    description:
      "Studied Mechatronics Engineering with a strong foundation in mechanical systems, electronics, robotics, and automation. Completed projects on industrial robotics, embedded systems, and control systems using MATLAB and Arduino.",
  },
  {
    school: "University College Dublin",
    href: "https://www.ucd.ie/",
    degree: "Master’s in Artificial Intelligence & Machine Learning (Upcoming)",
    logoUrl: "/images/education/university-college-dublin.png",
    start: "2027",
    end: "2028",
    description:
      "Planned coursework includes Deep Learning, Natural Language Processing, Data Science, and LLM-based Systems. Focused on building real-world AI applications in healthcare, automation, and smart systems.",
  },
  {
    school: "Google Career Certificates",
    href: "#",
    degree:
      "UX Design, Digital Marketing, E-Commerce, Data Analytics, Performance Ads,  basicsCybersecurity,",
    logoUrl: "/images/education/google-career-certificates.png",
    start: "Online",
    end: "Certification",
    description:
      "Completed Google-certified courses via Coursera. Gained hands-on experience in data-driven marketing strategies, business intelligence reporting, cloud infrastructure basics",
  },
  {
    school: "IBM SkillsBuild",
    href: "#",
    degree:
      "Full Stack Development, Data Analytics, DevOps & Deep Learning",
    logoUrl: "/images/education/ibm-skillsbuild.png",
    start: "Online",
    end: "Certification",
    description:
      "Worked on real-time projects involving React, Node.js, MongoDB, Python, and Google Colab Notebooks. Learned containerization using Docker and CI/CD with Jenkins and GitHub Actions.",
  },
  {
    school: "NVIDIA Deep Learning Institute",
    href: "#",
    degree:
      "Accelerated Computing, Generative AI, Graphics & Simulation, AI Infrastructure",
    logoUrl: "/images/education/nvidia-dli.png",
    start: "Online",
    end: "Certification",
    description:
      "Self-paced learning using Jupyter Labs and cloud GPU environments. Implemented deep learning models for image classification, LLM training, and simulation-based learning environments.",
  },

],

  projects: [
    {
      title: "Predictive Maintenance Using Machine Learning",
      href: "#",
      dates: "Kaggle",
      active: true,
      description:
    "Built a predictive maintenance system using machine learning on the NASA Turbofan Engine dataset. The model analyzes engine sensor readings to predict Remaining Useful Life (RUL) and estimate potential failures before they happen. Added health scoring, maintenance warning levels, and failure risk categorization to simulate a real industrial monitoring system.",
  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "Matplotlib",
    "Google Colab Notebook",
    "Machine Learning",
  ],
      links: [
        {
          type: "Source",
          href: "https://colab.research.google.com/drive/1Wi7DHRQrckMvOK6abQkkIF5zXFR7CIig?usp=sharing",
          icon: <Icons.colab className="size-3" />,
        },
        {
          type: "Medium",
          href: "https://medium.com/@ungaaaabungaaa/my-engine-light-got-me-thinking-6b24fdd2bae7",
          icon: <Icons.medium className="size-3" />,
        },
      ],
      image: "/images/projects/predictive-maintenance.png",
      video: "",
    },
    {
      title: "Space Exploration Rover",
      href: "#",
      dates: "M.A.R.S",
      active: true,
      description:
        "built a physical rover designed for autonomous navigation and data collection on uncharted terrain. The rover uses advanced sensors to map its environment, detect obstacles, and transmit real-time data back to a control center. This project highlights my work in robotics and AI, focusing on exploration and real-world applications",
      technologies: [
        "Raspberry Pi",
        "Python",
        "OpenCV",
        "ROS (Robot Operating System)",
        "LIDAR",
        "Arduino",
        "Ultrasonic Sensors",
        "GPS",
        "Pixhawk Mission Planner",
      ],
      links: [
        {
          type: "Medium",
          href: "#",
          icon: <Icons.medium className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/space-exploration-rover.jpg",
      video: "",
    },
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      href: "#",
      dates: "NuroScience",
      active: true,
      description:
        "Developed a digital tool aimed at providing users with guided therapy exercises and mental health assessments. The application offers personalized sessions, helping individuals track their thoughts, behaviors, and emotions, while incorporating techniques to improve mental well-being. This project emphasizes my focus on psychology & human-centered AI",
      technologies: [
        "Hermes AI",
        "AI Agnets",
        "Fluid UI",
      ],
      links: [
        {
          type: "Medium",
          href: "#",
          icon: <Icons.medium className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/cognitive-behavioral-therapy.jpeg",
      video: "",
    },
    {
      title: "Satellite-based Disaster Monitoring",
      href: "#",
      dates: "Kaggle | FigWorks",
      active: true,
      description:
        " project, I created a system that leverages satellite imagery and data to monitor and predict natural disasters in real-time. The platform analyzes environmental changes, enabling early detection of events like floods, wildfires, and hurricanes, and provides critical updates to authorities for timely intervention. This project showcases my expertise in remote sensing and geospatial analysis",
      technologies: [
        "Python",
        "Google Earth Engine",
        "TensorFlow",
        "OpenCV",
        "AWS (Amazon Web Services)",
        "Geospatial Data Abstraction Library (GDAL)",
        "REST APIs",
        "Stripe",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Medium",
          href: "#",
          icon: <Icons.medium className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/satellite-disaster-monitoring.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Swarm Intelligence & Distributed Robotics",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Developing an innovative system that leverages swarm intelligence to enhance the coordination and efficiency of distributed robotic networks",
      image: "/images/research/swarm-intelligence-distributed-robotics.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Generative AI for Design & Manufacturing",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Utilizing generative AI to optimize and automate design and manufacturing processes for enhanced efficiency and creativity",
      image: "/images/research/generative-ai-design-manufacturing.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Advanced Lidar-Equipped Bionic Arm for Search & Rescue",
      dates: "ResearchGate | Figshare | Patent ",
      location: "Patent",
      description:
        "Creating an advanced bionic arm equipped with LiDAR technology to enhance search and rescue operations through improved navigation and object detection.",
      image: "/images/research/bionic-arm-lidar-search-rescue.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Autonomous Mission Planning for Drones Using PIXHAWK",
      dates: "ResearchGate | Figshare | Patent ",
      location: "Patent",
      description:
        "Developing autonomous mission planning systems for drones utilizing PIXHAWK technology to optimize flight paths and enhance operational efficiency.",
      image: "/images/research/autonomous-drone-mission-planning.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "3D Printing Crack Detection with Ultrasonic Technology",
      dates: "ResearchGate | Figshare | Patent ",
      location: "Patent",
      description:
        "Implementing ultrasonic technology for real-time crack detection in 3D-printed structures to ensure quality and integrity during manufacturing.",
      image: "/images/research/3d-printing-crack-detection.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "The Science of Emotions",
      dates: "Articles",
      location: "Medium | LinkedIn",
      description:
        "Exploring the intricate interplay of emotions through a scientific lens to understand their impact on behavior and decision-making.",
      image: "/images/research/science-of-emotions.png",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Cognitive Biases in Decision-Making",
      dates: "Articles",
      location: "Medium | LinkedIn",
      description:
        "Examining the influence of cognitive biases on decision-making processes to improve awareness and enhance critical thinking.",
      image: "/images/research/cognitive-biases-decision-making.png",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Emotion-Responsive Smart Lighting System.",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Developing an emotion-responsive smart lighting system that adapts illumination based on user emotions to create personalized and immersive environments.",
      image: "/images/research/emotion-responsive-smart-lighting.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Stress Monitoring for Pilots.",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Creating a stress monitoring system for pilots to assess and manage their mental well-being, ensuring safer flight operations.",
      image: "/images/research/stress-monitoring-pilots.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Aquaponics Monitoring System.",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Developing a comprehensive monitoring system for aquaponics to optimize environmental conditions and enhance the growth of plants and fish.",
      image: "/images/research/aquaponics-monitoring-system.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
