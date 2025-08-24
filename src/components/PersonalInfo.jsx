

const PersonalInfo = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white border-b pb-2 dark:border-gray-600">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Full Name" value={resumeData.personalInfo.name} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="email" name="email" placeholder="Email" value={resumeData.personalInfo.email} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="tel" name="phone" placeholder="Phone" value={resumeData.personalInfo.phone} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="text" name="address" placeholder="Address (City, State)" value={resumeData.personalInfo.address} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={resumeData.personalInfo.linkedin} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="text" name="github" placeholder="GitHub Profile URL" value={resumeData.personalInfo.github} onChange={handleChange} className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-3"  />
      </div>
       <textarea
          name="summary"
          placeholder="Professional Summary or Objective..."
          rows="4"
          value={resumeData.personalInfo.summary}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
    </div>
  );
};

export default PersonalInfo;