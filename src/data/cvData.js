const cvData = {
  sectionTitles: {
    profile: "PROFIL",
    contact: "KONTAKT",
    projects: "PROJEKTY",
    workExperience: "DOŚWIADCZENIE ZAWODOWE",
    skills: "UMIEJĘTNOŚCI",
    education: "EDUKACJA I CERTYFIKATY",
  },
  personalInfo: {
    name: "MACIEJ BRATKO",
    title: "Frontend Developer i Specjalista IT",
    profile:
      "Specjalista IT z solidnym zapleczem technicznym i umiejętnościami w zakresie frontend developmentu. Biegły w nowoczesnych narzędziach i metodologiach tworzenia stron internetowych, ze znajomością języka angielskiego na poziomie B2. Doświadczony w dotrzymywaniu terminów projektowych i pracy z interfejsami API opartymi na HTTP, w tym Axios. Obecnie poszerza wiedzę z zakresu Full Stack JavaScript development, jednocześnie utrzymując profesjonalne obowiązki IT.",
    profilePicture: null,
    contact: {
      phone: "+48 690 136 499",
      email: "maciej.bratko@outlook.com",
      github: "https://github.com/MaciejBratko",
    },
    projects: [
      {
        name: "Kapu$ta - Aplikacja Full-Stack z responsywnym designem i naciskiem na UX",
        url: "https://github.com/EnChyb/FE-Kapusta-Team-Project",
      },
      {
        name: "Fresh Harvest Box - Frontend sklepu owocowego w React z integracją API Axios",
        url: "https://github.com/MaciejBratko/Fresh_Harvest_Box",
      },
      {
        name: "Cinemania - Katalog filmowy oparty na API wykorzystujący nowoczesne metody HTTP",
        url: "https://github.com/RafalSz1270/Cinemania-JS",
      },
    ],
  },
  workExperience: [
    {
      title: "Specjalista IT - Hemmersbach GmbH",
      period: "09/2021 -- 03/2025",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Wdrażanie i utrzymanie rozwiązań infrastruktury IT z wykorzystaniem metodologii zwinnych",
        "Zarządzanie projektami technicznymi z zachowaniem ścisłych terminów",
        "Współpraca z zespołami międzynarodowymi przy użyciu języka angielskiego na poziomie B2",
      ],
    },
  ],
  skills: {
    programmingLanguages: [
      "HTML5, CSS3, JavaScript",
      "Ekosystem React+Redux",
      "TypeScript",
    ],
    webDevelopment: [
      "Znajomość metod protokołu HTTP",
      "REST API i biblioteka Axios",
      "Podstawy Docker dla developmentu",
      "Figma do projektowania UI/UX",
    ],
    methodologies: [
      "Praktyki programowania zwinnego",
      "Kontrola wersji Git",
      "Cykl życia oprogramowania",
    ],
    technicalTools: [
      "Narzędzia do rozwoju frontend",
      "Zasady projektowania UI/UX",
    ],
  },
  education: [
    {
      institution: "Full Stack Javascript Developer — GoIT",
      period: "01/2024 -- 11/2024",
      details: [
        "Nowoczesny frontend development w React",
        "Integracja HTTP/REST API z użyciem Axios",
        "Zasady i implementacja UI/UX",
        "Podstawy konteneryzacji Docker",
      ],
    },
    {
      institution: "Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa",
      period: "2017 -- 2020",
      description:
        "Specjalizacja Technik Informatyk z certyfikatami technicznymi:",
      certifications: [
        "EE.09 Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych",
        "EE.08 Montaż i eksploatacja systemów komputerowych",
      ],
    },
  ],
};

export default cvData;
