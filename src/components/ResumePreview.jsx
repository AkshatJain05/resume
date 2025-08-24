import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

const ResumePreview = ({ resumeData }) => {
  const { personalInfo, education, experience, skills, projects } = resumeData;

  return (
    <div id="resume-preview" className="p-8 print:p-6 bg-white shadow-lg aspect-[8.5/11] min-w-full text-gray-800">
      {/* --- HEADER --- */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold tracking-tight">{personalInfo.name || 'Your Name'}</h1>
        <div className="flex justify-center flex-wrap items-center space-x-4 text-sm mt-2 text-gray-600">
          {personalInfo.email && <span><FaEnvelope className="inline mr-1"/>{personalInfo.email}</span>}
          {personalInfo.phone && <span><FaPhone className="inline mr-1 rotate-90"/>{personalInfo.phone}</span>}
          {personalInfo.address && <span><FaMapMarkerAlt className="inline mr-1"/>{personalInfo.address}</span>}
        </div>
        <div className="flex justify-center items-center space-x-4 text-sm mt-2 text-blue-600 ">
          {personalInfo.linkedin && <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline"><FaLinkedin className="inline mr-1"/>LinkedIn</a>}
          {personalInfo.github && <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline"><FaGithub className="inline mr-1"/>GitHub</a>}
        </div>
      </header>

      {/* --- OBJECTIVE --- */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-2 text-justify">OBJECTIVE</h2>
        <p className="text-gray-700 text-sm text-justify">{personalInfo.summary}</p>
      </section>

      {/* --- EDUCATION --- */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-2">EDUCATION</h2>
        {education.map(edu => (
          <div key={edu.id} className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-semibold text-md">{edu.school}</h3>
              <p className="text-sm">{edu.startDate} {edu.endDate && "-"} {edu.endDate}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="italic">{edu.degree}</p>
              <p className="font-semibold">{edu.marks}</p>
            </div>
          </div>
        ))}
      </section>

      {/* --- EXPERIENCE (Conditionally Rendered) --- */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-2">EXPERIENCE</h2>
          {experience.map(exp => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-md">{exp.company}</h3>
                <p className="text-sm">{exp.startDate} - {exp.endDate}</p>
              </div>
              <p className="italic text-sm">{exp.role}</p>
              <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* --- PROJECTS --- */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-2">PROJECTS</h2>
          {projects.map(proj => (
            <div key={proj.id} className="mb-3">
              <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-md">{proj.name}</h3>
                  {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm"><FaLink className="inline-block mr-1" />Link</a>}
              </div>
              <p className="text-sm text-gray-700 mt-1 text-justify">{proj.description}</p>
              <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold text-gray-800">Technologies Used: </span>
                  {proj.technologies}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* --- SKILLS --- */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-2">SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePreview;