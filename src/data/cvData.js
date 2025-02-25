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
    // Adjusted title to align with the Junior Full Stack Developer role
    title: "Junior Full Stack Developer & IT Specialist",
    profile:
      "IT Specialist with a strong technical background and a proven track record in frontend development. I have solid experience with modern web development tools and methodologies and am currently expanding my skills to full-stack JavaScript development. I am proficient in JavaScript, React and TypeScript fundamentals, and I'm gaining hands-on experience with backend technologies through my Full Stack JavaScript Developer course. I communicate effectively in English (B2) and thrive in remote, agile environments.",
    profilePicture: null,
    contact: {
      phone: "+48 690 136 499",
      email: "maciej.bratko@outlook.com",
      github: "https://github.com/MaciejBratko",
    },
    projects: [
      {
        // Emphasize full-stack aspects where possible
        name: "Kapu$ta - Full-Stack App with Responsive Design and UX Focus",
        url: "https://github.com/EnChyb/FE-Kapusta-Team-Project",
        description:
          "A full-stack application project where I contributed to both frontend and backend development, focusing on responsive design and user experience.",
      },
      {
        name: "Fresh Harvest Box - React-based Fruit Store Frontend with Axios API Integration",
        url: "https://github.com/MaciejBratko/Fresh_Harvest_Box",
        description:
          "Developed a modern, responsive frontend for an online fruit store using React and Axios for API integration.",
      },
      {
        name: "Cinemania - API-powered Movie Catalogue Using Modern HTTP Methods",
        url: "https://github.com/RafalSz1270/Cinemania-JS",
        description:
          "Collaborated on building an API-driven movie catalogue application, enhancing my understanding of client-server communication and RESTful principles.",
      },
    ],
  },
  workExperience: [
    {
      title: "IT Specialist - Hemmersbach GmbH",
      period: "09/2021 -- 03/2025",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Implemented and maintained IT infrastructure solutions using agile methodologies",
        "Managed technical projects with strict deadline adherence",
        "Collaborated with international teams using B2-level English",
        "Gained experience in understanding user requirements and problem-solving, which supports my transition to full-stack development",
      ],
    },
  ],
  skills: {
    programmingLanguages: [
      "HTML5, CSS3, JavaScript",
      "React ecosystem",
      "TypeScript",
    ],
    webDevelopment: [
      "Modern frontend development with React basics",
      "HTTP protocol methods and REST APIs using Axios",
      "Basic Node.js and Express concepts from full-stack training",
      "Figma for UI/UX design",
    ],
    methodologies: [
      "Agile development practices",
      "Version control with Git",
      "Software development lifecycle",
    ],
    technicalTools: [
      "Frontend development tools and libraries",
      "UI/UX design principles",
      "Cross-browser compatibility testing",
      "Familiarity with Docker for development",
    ],
  },
  education: [
    {
      institution: "Full Stack Javascript Developer — GoIT",
      period: "01/2024 -- 12/2024",
      details: [
        "Modern frontend development with React",
        "Backend development basics with Node.js and Express",
        "HTTP/REST API integration using Axios",
        "Introduction to Next.js and full-stack architecture",
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
