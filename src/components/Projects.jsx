import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Projects = ({ resumeData, setResumeData }) => {
  const handleAddProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now(),
          name: '',
          description: '',
          technologies: '',
          link: '',
        },
      ],
    }));
  };

  const handleRemoveProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, [name]: value } : proj
      ),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white border-b pb-2 dark:border-gray-600">
        Projects
      </h2>
      <AnimatePresence>
        {resumeData.projects.map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
            className="p-4 border rounded-lg space-y-3 bg-gray-50 dark:bg-gray-700/50 dark:border-gray-600 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  value={proj.name}
                  onChange={(e) => handleChange(proj.id, e)}
                  className="md:col-span-2 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                 <input
                  type="text"
                  name="technologies"
                  placeholder="Technologies Used (e.g., React, Node.js)"
                  value={proj.technologies}
                  onChange={(e) => handleChange(proj.id, e)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="text"
                  name="link"
                  placeholder="Project Link (e.g., GitHub, Live Demo)"
                  value={proj.link}
                  onChange={(e) => handleChange(proj.id, e)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
            </div>
            <textarea
              name="description"
              placeholder="Project Description"
              value={proj.description}
              onChange={(e) => handleChange(proj.id, e)}
              rows="3"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              onClick={() => handleRemoveProject(proj.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove project entry"
            >
              <FaTrash />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={handleAddProject}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
      >
        <FaPlus />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default Projects;