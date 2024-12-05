const cvData = {
  sectionTitles: {
    profile: "PROFIL",
    contact: "KONTAKT",
    interests: "ZAINTERESOWANIA",
    workExperience: "DOŚWIADCZENIE ZAWODOWE",
    skills: "UMIEJĘTNOŚCI",
    education: "WYKSZTAŁCENIE I CERTYFIKATY",
  },
  personalInfo: {
    name: "MACIEJ BRATKO",
    title: "Specjalista IT w Hemmersbach GmbH",
    profile:
      "Doświadczony specjalista IT w Hemmersbach GmbH, specjalizujący się w rozwiązaniach DaaS i rozwiązywaniu problemów na miejscu. Posiadacz certyfikatów zawodowych EE.08 i EE.09, obecnie rozwija umiejętności w zakresie Full Stack JavaScript Development.",
    profilePicture: null,
    contact: {
      phone: "+48 690 136 499",
      email: "maciej.bratko@outlook.com",
      github: "https://github.com/MaciejBratko",
    },
    interests: [
      "Ogólny rozwój oprogramowania komputerowego",
      "Sztuczna inteligencja (modele językowe)",
      "Gry komputerowe (historia i rozwój)",
    ],
  },
  workExperience: [
    {
      title: "Specjalista IT - Hemmersbach GmbH",
      period: "09/2021 -- obecnie",
      location: "Bielany Wrocławskie",
      responsibilities: [
        "Przygotowywanie sprzętu DaaS do wysyłki międzynarodowej",
        "Wdrażanie i utrzymanie rozwiązań infrastruktury IT",
        "Świadczenie wsparcia technicznego i usług rozwiązywania problemów",
      ],
    },
  ],
  skills: {
    programmingLanguages: [
      "HTML, CSS, JavaScript",
      "React",
      "Rozwój front-end i back-end",
    ],
    webDevelopment: [
      "Rozwój front-end i back-end",
      "Projektowanie responsywne",
      "Architektura aplikacji webowych",
    ],
    systemAdministration: [
      "Systemy komputerowe i urządzenia peryferyjne",
      "Konfiguracja i utrzymanie sieci",
      "Biegła znajomość Windows i Linux",
    ],
    versionControl: [
      "Zarządzanie repozytoriami Git i GitHub",
      "Doświadczenie w systemach kontroli wersji",
      "Doświadczenie w kierowaniu zespołem",
    ],
  },
  education: [
    {
      institution: "Full Stack Javascript Developer — GoIT",
      period: "01/2024 -- 11/2024",
      details: [
        "Tworzenie semantycznych struktur stron i responsywnych layoutów",
        "React, Redux, Node.js i React Native",
        "Rozwój backend z Express.js i MongoDB",
        "Liczne projekty indywidualne i zespołowe",
      ],
    },
    {
      institution: "Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa",
      period: "2017 -- 2020",
      description: "Specjalizacja Technik Informatyk z certyfikatami:",
      certifications: [
        "EE.09 Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych",
        "EE.08 Montaż i eksploatacja systemów komputerowych",
      ],
    },
  ],
};

export default cvData;
  