import React from "react";
import { useSelector } from "react-redux";
import { Mail, Phone, Github, Code } from "lucide-react";
import profilePic from "../profile_pic.JPG";

const ModernCV = () => {
  const cvData = useSelector((state) => state.cv);

  const formatSkillCategory = (category) => {
    return category.replace(/([A-Z])/g, ' $1').trim();
  };

  const CVContent = () => (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-gray-800 text-white p-8">
            <div className="flex flex-col items-center mb-8">
              <img
                src={cvData.personalInfo.profilePicture || profilePic}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover mb-4 border-4 border-gray-600"
              />
              <h2 className="text-2xl font-bold mb-2">
                {cvData.personalInfo.name}
              </h2>
              <p className="text-gray-300 text-center">
                {cvData.personalInfo.title}
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  {cvData.sectionTitles.profile}
                </h3>
                <p className="text-gray-300">
                  {cvData.personalInfo.profile}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  {cvData.sectionTitles.contact}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>{cvData.personalInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>{cvData.personalInfo.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5" />
                    <span>{cvData.personalInfo.contact.github}</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  {cvData.sectionTitles.projects}
                </h3>
                <ul className="list-none list-inside text-gray-300 space-y-2">
                  {cvData.personalInfo.projects.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-8 pt-8 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Code className="w-4 h-4" />
                  <span>CV created with React & Tailwind CSS</span>
                </div>
              </section>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 p-8">
            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                {cvData.sectionTitles.workExperience}
              </h3>
              {cvData.workExperience.map((work, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-700">
                      {work.title}
                    </h4>
                    <span>{work.period}</span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {work.location}
                  </p>
                  <ul className="list-none list-inside text-gray-700">
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                {cvData.sectionTitles.skills}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(cvData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      {formatSkillCategory(category)}
                    </h4>
                    <ul className="list-none list-inside text-gray-700">
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                {cvData.sectionTitles.education}
              </h3>
              {cvData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-700">
                      {edu.institution}
                    </h4>
                    <span>{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 mb-2">
                      {edu.description}
                    </p>
                  )}
                  <ul className="list-none list-inside text-gray-700 space-y-1">
                    {edu.details?.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                    {edu.certifications?.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <CVContent />
    </div>
  );
};

export default ModernCV;
