import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Syed Abdul Muqeeth",
  initials: "Sammy",
  url: "https://syedabdulmuqeeth.com",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Transitioning into a comma, Full stops? They're universally unloved.",
  summary:
    "Diving into Cosmology while learning Spline & Unreal Engine. Open to collaborations on Sass and always up for chats about Machine Learning, Quantum Computing, & Cybersecurity.",
  avatarUrl: "/me.jpg",
  skills: [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Python",
  "Go",
  "Postgres",
  "Docker",
  "Kubernetes",
  "Java",
  "C++",
  "Azure",
  "Google Cloud",
  "Business Intelligence",
  "Cybersecurity",
  "Project Management",
  "IT Support",
  "E-Commerce",
  "Data Analytics",
  "AI-Powered Performance Ads",
  "Full Stack Development",
  "DevOps",
  "Data Engineering",
  "Deep Learning",
  "Cloud Engineering",
  "UX Design",
  "Digital Marketing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ungaaaabungaaa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/syed-abdul-muqeeth-8173a024b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@syed_abdul_muqeeth",
        icon: Icons.medium,
        navbar: true,
      },
      Youtube: {
        name: "Codepen",
        url: "",
        icon: Icons.codepen,
        navbar: false,
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
      company: "CineFirm",
      href: "https://cinefirm.in",
      badges: [],
      location: "Bengaluru, Karnataka, India · Remote",
      title: "Full Stack Developer",
      logoUrl: "/Cinefirm.png",
      start: "Sep 2024",
      end: "Present",
      description:
      "Currently building a Next.js web app for Cinefirm to showcase their photography and videography services,\n along with a responsive booking system to onboard clients and schedule shoots seamlessly.\nLeveraging GSAP for smooth animations, Vercel for hosting, and the power of the Next.js framework,\nthe platform highlights Cinefirm's expertise in both event shoots and brand design,\nensuring all client needs are met with precision and creativity",
    },
    {
      company: "Ammas Pastries",
      badges: [],
      href: "https://ammaspastries.in/",
      location: "Kothanur · Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/Ammas.png",
      start: "Jul 2023",
      end: "Aug 2024 · 1 yr 2 mos",
      description:
      "Led the development of innovative web solutions tailored for the bakery industry.\nSpecializing in creating custom, scalable technology that enhances user experience and operational efficiency.\nReact Migration: Migrated the website to a React platform, significantly improving performance and user experience.\nNext.js Development: Built a comprehensive React application using Next.js, boosting functionality and SEO.\nWordPress Integration: Integrated WordPress CRM with the React app using REST APIs for streamlined content management and payment processing.\nPayment Solutions: Implemented cloud functions for secure Razorpay payment transactions.\nSEO & Accessibility: Enhanced website SEO and accessibility to improve reach and compliance.\nCentralized TV System: Developed a TV system for displaying new product launches in stores, increasing customer engagement.\nDynamic Delivery Charges: Integrated location-based delivery charges for precise and transparent cost calculation.",
    },
    {
      company: "Hindustan Aeronautics Limited",
      href: "https://www.hal-india.co.in/",
      badges: [],
      location: "HAL Airport · On-site",
      title: "Engineer Intern",
      logoUrl: "/HAL.png",
      start: "Jul 2022",
      end: "Aug 2022 · 2 mos",
      description:
      "Assisting in the design and development of aerospace components.\nConducting research and analysis on various engineering projects.\nCollaborating with cross-functional teams to support ongoing projects.\nParticipating in technical discussions and providing innovative solutions.\nGaining hands-on experience with industry-standard tools and technologies.\nThis internship provided me with a deeper understanding of aerospace engineering and enhanced my technical and problem-solving skills",
    }

  ],
  education: [
    {
      school: "Reva University",
      href: "https://www.reva.edu.in/",
      degree: "B.Tech Mechatronics",
      logoUrl: "/Reva.png",
      start: "2023",
      end: "2019",
    },
    {
      school: "University College Dublin",
      href: "https://www.ucd.ie/",
      degree: "AI & ML Masters ",
      logoUrl: "/Dublin.png",
      start: "2026",
      end: "2027",
    },
    {
      school: "Google Certified",
      href: "#",
      degree: "UX Design| Digital Marketing| E-Commerce| Data Analytics| AI-Powered Performance Ads| IT Support | Project Management | Business Intelligence | Cybersecurity | Cloud Engineer",
      logoUrl: "/Google.png",
      start: "Online",
      end: "Certification",
    },
    {
      school: "IBM Certified",
      href: "#",
      degree: "Full Stack Software Developer |Data Analyst | DevOps & Software Engineering| Data Engineering| Deep Learning",
      logoUrl: "/IBM.png",
      start: "Online",
      end: "Certification",
    },
    {
      school: "Microsoft Certified",
      href: "#",
      degree: "Azure Developer Associate | Cybersecurity Architect Expert",
      logoUrl: "/Microsoft.png",
      start: "Online",
      end: "Certification",
    },
    {
      school: "Udemy Certified",
      href: "#",
      degree: "Machine Learning | Stock Analysis | Full Stack Web Development | Unity | Unreal Engine | Digital Marketing",
      logoUrl: "/Udemy.png",
      start: "Online",
      end: "Certification",
    },
    {
      school: "Coursera Certified",
      href: "#",
      degree: " Electric Vehicles and Mobility | Robotics | Machine Learning ",
      logoUrl: "/Coursera.png",
      start: "Online",
      end: "Certification",
    },
    
  ],
  projects: [
    {
      title: "Predictive Maintenance Using Machine Learning",
      href: "#",
      dates: "Kaggle | FigWorks",
      active: true,
      description:
        "developed a predictive maintenance system using machine learning to help companies reduce downtime & optimize equipment performance. By analyzing historical data, the model predicts potential failures, allowing for timely interventions and saving on costly repairs. This project is an excellent example of leveraging data to drive operational efficiency",
      technologies: [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Flask",
        "PostgreSQL",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Medium",
          href: "#",
          icon: <Icons.medium className="size-3" />,
        },
        {
          type: "FigShare",
          href: "#",
          icon: <Icons.figshare className="size-3" />,
        },
      ],
      image: "/Maintainece.jpeg",
      video:
        "",
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
      image: "/Space Exploration Rove.jpeg",
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
        "React Native",
        "Typescript",
        "Node.js",
        "MongoDB",
        "TensorFlow",
        "Express",
        "Twilio API",
        "Material UI",
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
      image: "/CBT.jpeg",
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
      image: "/Sat.jpeg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Swarm Intelligence & Distributed Robotics",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
        "Developing an innovative system that leverages swarm intelligence to enhance the coordination and efficiency of distributed robotic networks",
      image:
        "/Group 12.png",
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
      image:
        "/Group 11.png",
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
      image:
        "/Group 13.png",
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
      image:
        "/Group 14.png",
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
      image:
        "/Group 15.png",
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
      image:
        "/Group 20.png",
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
      image:
        "/Group 16.png",
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
      image:
        "/Group 17.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        }
      ],
    },
    {
      title: "Stress Monitoring for Pilots.",
      dates: "ResearchGate | Figshare",
      location: "Research",
      description:
       "Creating a stress monitoring system for pilots to assess and manage their mental well-being, ensuring safer flight operations.",
      image:
        "/Group 18.png",
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
      image:
        "/Group 19.png",
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
