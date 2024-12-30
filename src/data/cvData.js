const cvData = {
  sectionTitles: {
    profile: "PROFILE",
    contact: "CONTACT",
    projects: "PROJECTS",
    workExperience: "WORK EXPERIENCE",
    skills: "SKILLS",
    education: "EDUCATION & CERTIFICATIONS",
  },
  personalInfo: {
    name: "MACIEJ BRATKO",
    title: "Frontend Developer & IT Specialist",
    profile:
      "IT specialist with strong technical background and frontend development skills. Proficient in modern web development tools and methodologies, with B2 English proficiency. Experienced in meeting project deadlines and working with HTTP-based APIs including Axios. Currently expanding Full Stack JavaScript development expertise while maintaining professional IT responsibilities.",
    profilePicture: null,
    contact: {
      phone: "+48 690 136 499",
      email: "maciej.bratko@outlook.com",
      github: "https://github.com/MaciejBratko",
    },
    projects: [
      {
        name: "Kapu$ta - Full-Stack app with responsive design and UX focus",
        url: "https://github.com/EnChyb/FE-Kapusta-Team-Project",
      },
      {
        name: "Fresh Harvest Box - React-based fruit store frontend with Axios API integration",
        url: "https://github.com/MaciejBratko/Fresh_Harvest_Box",
      },
      {
        name: "Cinemania - API-powered movie catalogue using modern HTTP methods",
        url: "https://github.com/RafalSz1270/Cinemania-JS",
      },
    ],
  },
  workExperience: [
    {
      title: "IT Specialist - Hemmersbach GmbH",
      period: "09/2021 -- Present",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Implementing and maintaining IT infrastructure solutions using agile methodologies",
        "Managing technical projects with strict deadline adherence",
        "Collaborating with international teams using B2-level English",
      ],
    },
  ],
  skills: {
    programmingLanguages: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React ecosystem",
      "TypeScript fundamentals",
    ],
    webDevelopment: [
      "HTTP protocol methods expertise",
      "REST APIs and Axios library",
      "Docker basics for development",
      "Figma for UI/UX design",
    ],
    methodologies: [
      "Agile development practices",
      "Version control with Git",
      "Software development lifecycle",
    ],
    technicalTools: [
      "Frontend development tools",
      "UI/UX design principles",
      "Cross-browser compatibility testing",
    ],
  },
  education: [
    {
      institution: "Full Stack Javascript Developer — GoIT",
      period: "01/2024 -- 11/2024",
      details: [
        "Modern frontend development with React",
        "HTTP/REST API integration using Axios",
        "UI/UX design principles and implementation",
        "Docker containerization basics",
      ],
    },
    {
      institution: "Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa",
      period: "2017 -- 2020",
      description:
        "IT Technician specialization with technical certifications:",
      certifications: [
        "EE.09 Programming, creating and administering websites and databases",
        "EE.08 Assembly and operation of computer systems",
      ],
    },
  ],
};

export default cvData;
