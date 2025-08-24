import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Skills = ({ resumeData, setResumeData }) => {
  const [currentSkill, setCurrentSkill] = useState('');

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && currentSkill.trim() !== '') {
      e.preventDefault();
      if (!resumeData.skills.includes(currentSkill.trim())) {
        setResumeData((prev) => ({
          ...prev,
          skills: [...prev.skills, currentSkill.trim()],
        }));
      }
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Skills</h2>
      <div className="p-4 border rounded-lg dark:border-gray-600">
        <div className="flex flex-wrap gap-2 mb-4">
          <AnimatePresence>
            {resumeData.skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-medium"
              >
                <span>{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  aria-label={`Remove ${skill}`}
                >
                  <FaTimes size={12} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <input
          type="text"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          onKeyDown={handleAddSkill}
          placeholder="Add a skill and press Enter"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    </div>
  );
};

export default Skills;