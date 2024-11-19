import React from 'react';
import { Mail, Phone, Github, Code } from 'lucide-react';
import profilePic from '../../profile_pic.JPG';

const ModernCV = () => {
  return (
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
              <h2 className="text-2xl font-bold mb-2">MACIEJ BRATKO</h2>
              <p className="text-gray-300 text-center">IT Specialist at Hemmersbach GmbH</p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">PROFILE</h3>
                <p className="text-gray-300">
                  Experienced IT specialist at Hemmersbach GmbH, specializing in DaaS solutions and on-site troubleshooting. 
                  Professional certifications EE.08 and EE.09 holder, currently developing Full Stack JavaScript Development skills.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">CONTACT</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+48 690 136 499</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>maciej.bratko@outlook.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5" />
                    <a href="https://github.com/MaciejBratko" className="hover:text-blue-300 transition">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">INTERESTS</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>General computer software development</li>
                  <li>Artificial intelligence (primarily language models)</li>
                  <li>Computer games (history and development)</li>
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
            {/* Work Experience moved to top */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                WORK EXPERIENCE
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">IT Specialist - Hemmersbach GmbH</h4>
                  <span className="text-gray-600">09/2021 -- Present</span>
                </div>
                <p className="text-gray-600 mb-2">Bielany Wrocławskie</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Preparing DaaS equipment for international shipment</li>
                  <li>Implementing and maintaining IT infrastructure solutions</li>
                  <li>Providing technical support and troubleshooting services</li>
                </ul>
              </div>
            </section>

            {/* Skills moved before education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                SKILLS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Programming Languages:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>Front-end and back-end development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Web Development:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Front-end and back-end development</li>
                    <li>Responsive design</li>
                    <li>Web application architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">System Administration:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Computer systems and peripheral devices</li>
                    <li>Network configuration and maintenance</li>
                    <li>Windows and Linux proficiency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Version Control:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Git and GitHub repository management</li>
                    <li>Version control system experience</li>
                    <li>Team leadership experience</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                EDUCATION & CERTIFICATIONS
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">Full Stack Javascript Developer — GoIT</h4>
                  <span className="text-gray-600">01/2024 -- 11/2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Creating semantic page structures and responsive layouts</li>
                  <li>React, Redux, Node.js, and React Native</li>
                  <li>Backend development with Express.js and MongoDB</li>
                  <li>Multiple individual and team projects</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa</h4>
                  <span className="text-gray-600">2017 -- 2020</span>
                </div>
                <p className="text-gray-700 mb-2">IT Technician specialization with certifications:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>EE.09 Programming, creating and administering websites and databases</li>
                  <li>EE.08 Assembly and operation of computer systems</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCV;
