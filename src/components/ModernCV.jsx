import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mail, Phone, Github, Code } from "lucide-react";
import profilePic from "../profile_pic.JPG";
import EditableField from "./EditableField";
import { 
  updatePersonalInfo, 
  updateWorkExperience, 
  updateSkill, 
  updateEducation 
} from "../redux/cvSlice";

const ModernCV = () => {
  const cvData = useSelector((state) => state.cv);
  const dispatch = useDispatch();

  const CVContent = () => (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-gray-800 text-white p-8">
            <div className="flex flex-col items-center mb-8">
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover mb-4 border-4 border-gray-600"
              />
              <h2 className="text-2xl font-bold mb-2">
                <EditableField
                  value={cvData.personalInfo.name}
                  onSave={(value) => dispatch(updatePersonalInfo({ field: 'name', value }))}
                />
              </h2>
              <p className="text-gray-300 text-center">
                <EditableField
                  value={cvData.personalInfo.title}
                  onSave={(value) => dispatch(updatePersonalInfo({ field: 'title', value }))}
                />
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  PROFILE
                </h3>
                <p className="text-gray-300">
                  <EditableField
                    value={cvData.personalInfo.profile}
                    onSave={(value) => dispatch(updatePersonalInfo({ field: 'profile', value }))}
                    multiline
                  />
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  CONTACT
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <EditableField
                      value={cvData.personalInfo.contact.phone}
                      onSave={(value) => dispatch(updatePersonalInfo({ field: 'contact', subfield: 'phone', value }))}
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <EditableField
                      value={cvData.personalInfo.contact.email}
                      onSave={(value) => dispatch(updatePersonalInfo({ field: 'contact', subfield: 'email', value }))}
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5" />
                    <EditableField
                      value={cvData.personalInfo.contact.github}
                      onSave={(value) => dispatch(updatePersonalInfo({ field: 'contact', subfield: 'github', value }))}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  INTERESTS
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {cvData.personalInfo.interests.map((interest, index) => (
                    <li key={index}>
                      <EditableField
                        value={interest}
                        onSave={(value) => {
                          const newInterests = [...cvData.personalInfo.interests];
                          newInterests[index] = value;
                          dispatch(updatePersonalInfo({ field: 'interests', value: newInterests }));
                        }}
                      />
                    </li>
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
                WORK EXPERIENCE
              </h3>
              {cvData.workExperience.map((work, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-700">
                      <EditableField
                        value={work.title}
                        onSave={(value) => dispatch(updateWorkExperience({ index, field: 'title', value }))}
                      />
                    </h4>
                    <EditableField
                      value={work.period}
                      onSave={(value) => dispatch(updateWorkExperience({ index, field: 'period', value }))}
                    />
                  </div>
                  <p className="text-gray-600 mb-2">
                    <EditableField
                      value={work.location}
                      onSave={(value) => dispatch(updateWorkExperience({ index, field: 'location', value }))}
                    />
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <EditableField
                          value={resp}
                          onSave={(value) => {
                            const newResponsibilities = [...work.responsibilities];
                            newResponsibilities[idx] = value;
                            dispatch(updateWorkExperience({ 
                              index, 
                              field: 'responsibilities', 
                              value: newResponsibilities 
                            }));
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                SKILLS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(cvData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      {category.replace(/([A-Z])/g, ' $1').trim()}:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {skills.map((skill, index) => (
                        <li key={index}>
                          <EditableField
                            value={skill}
                            onSave={(value) => dispatch(updateSkill({ category, index, value }))}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                EDUCATION & CERTIFICATIONS
              </h3>
              {cvData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-700">
                      <EditableField
                        value={edu.institution}
                        onSave={(value) => dispatch(updateEducation({ index, field: 'institution', value }))}
                      />
                    </h4>
                    <EditableField
                      value={edu.period}
                      onSave={(value) => dispatch(updateEducation({ index, field: 'period', value }))}
                    />
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 mb-2">
                      <EditableField
                        value={edu.description}
                        onSave={(value) => dispatch(updateEducation({ index, field: 'description', value }))}
                      />
                    </p>
                  )}
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {edu.details?.map((detail, idx) => (
                      <li key={idx}>
                        <EditableField
                          value={detail}
                          onSave={(value) => {
                            const newDetails = [...edu.details];
                            newDetails[idx] = value;
                            dispatch(updateEducation({ index, field: 'details', value: newDetails }));
                          }}
                        />
                      </li>
                    ))}
                    {edu.certifications?.map((cert, idx) => (
                      <li key={idx}>
                        <EditableField
                          value={cert}
                          onSave={(value) => {
                            const newCertifications = [...edu.certifications];
                            newCertifications[idx] = value;
                            dispatch(updateEducation({ index, field: 'certifications', value: newCertifications }));
                          }}
                        />
                      </li>
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
