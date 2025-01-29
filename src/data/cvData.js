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
    title: "Tester Manualny Oprogramowania",
    profile:
      "Specjalista IT z analitycznym podejściem i doświadczeniem w testowaniu aplikacji webowych. Posiadam umiejętność logicznego myślenia i zdolności analityczne niezbędne w testowaniu oprogramowania. Biegły w identyfikacji problemów z użytecznością (user experience) i zapewnianiu jakości produktów cyfrowych. Doświadczony w pracy zespołowej i dotrzymywaniu terminów projektowych, ze znajomością metodologii zwinnych.",
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
      period: "09/2021 -- Obecnie",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Współpraca z zespołami projektowymi w metodologii zwinnej",
        "Identyfikacja, raportowanie i monitorowanie błędów w systemach",
        "Wdrażanie i utrzymanie rozwiązań infrastruktury IT z wykorzystaniem metodologii zwinnych",
        "Zarządzanie projektami technicznymi z zachowaniem ścisłych terminów",
        "Współpraca z zespołami międzynarodowymi przy użyciu języka angielskiego na poziomie B2",
      ],
    },
  ],
  skills: {
    testingSkills: [
      "Testy manualne aplikacji webowych",
      "Testowanie user experience (UX/UI)",
      "Raportowanie i śledzenie błędów",
      "Testy cross-browser i responsywności",
    ],
    analytical: [
      "Myślenie analityczne i logiczne",
      "Dbałość o szczegóły",
      "Umiejętność dokumentacji testów",
      "Analiza wymagań użytkownika",
    ],
    methodologies: [
      "Metodologie zwinne",
      "Praca w systemie SCRUM",
      "Zarządzanie jakością oprogramowania",
    ],
    technicalTools: [
      "Systemy zarządzania błędami",
      "Narzędzia testowania webowego",
      "Podstawy HTML/CSS dla testów",
      "Znajomość elementów UI (checkboxy, radiobuttony, etc.)",
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
