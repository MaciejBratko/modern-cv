const cvData = {
  sectionTitles: {
    profile: "PROFILE",
    contact: "CONTACT",
    interests: "INTERESTS",
    workExperience: "WORK EXPERIENCE",
    skills: "SKILLS",
    education: "EDUCATION & CERTIFICATIONS"
  },
  personalInfo: {
    name: "MACIEJ BRATKO",
    title: "IT Specialist at Hemmersbach GmbH",
    profile: "IT specialist with strong technical foundation and B2 English proficiency, currently expanding expertise in frontend development. Committed to meeting deadlines and delivering high-quality solutions. Experienced in implementing and maintaining IT infrastructure with a focus on modern web technologies.",
    profilePicture: null,
    contact: {
      phone: "+48 690 136 499",
      email: "maciej.bratko@outlook.com",
      github: "https://github.com/MaciejBratko"
    },
    interests: [
      "Frontend development and web technologies",
      "Software development methodologies",
      "UI/UX design principles"
    ]
  },
  workExperience: [
    {
      title: "IT Specialist - Hemmersbach GmbH",
      period: "09/2021 -- Present",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Preparing DaaS equipment for international shipment",
        "Implementing and maintaining IT infrastructure solutions",
        "Providing technical support and troubleshooting services"
      ]
    }
  ],
  skills: {
    programmingLanguages: [
      "HTML, CSS, JavaScript",
      "React",
      "RESTful APIs and Axios"
    ],
    webDevelopment: [
      "HTTP protocol methods",
      "Frontend development",
      "Responsive design"
    ],
    technicalTools: [
      "Docker basics",
      "Figma for UI design",
      "Version control with Git"
    ],
    professionalSkills: [
      "English language (B2 level)",
      "Deadline-oriented work approach",
      "Agile development methodologies"
    ]
  },
  education: [
    {
      institution: "Full Stack Javascript Developer — GoIT",
      period: "01/2024 -- 11/2024",
      details: [
        "Frontend development with React",
        "HTTP and RESTful API integration",
        "Modern software development practices",
        "UI/UX design fundamentals"
      ]
    },
    {
      institution: "Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa",
      period: "2017 -- 2020",
      description: "IT Technician specialization with certifications:",
      certifications: [
        "EE.09 Programming, creating and administering websites and databases",
        "EE.08 Assembly and operation of computer systems"
      ]
    }
  ]
};

export default cvData;
