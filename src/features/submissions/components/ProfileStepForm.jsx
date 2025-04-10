

function ProfileStepForm() {

  const educationLevels = [
    "Select",
    "Some High School",
    "High School / GED",
    "Some College",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree or Higher",
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        STEP 1: COMPLETE PROFILE
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              eMail Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="max-w-xs"> 
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(###) ###-####"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 pr-10" // Add padding for icon
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              📞 
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="smsAlerts"
              name="smsAlerts"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="smsAlerts" className="text-sm text-gray-700">
              Send me SMS text alerts about my submission.
            </label>
          </div>
          <p className="text-xs text-gray-500">
            *By adding your phone number, you agree to be contacted by the institution. Freedom by Shamrock will not share this phone number with anyone outside of the institution. Please add your country code first if it is not a US phone number. Neither the institution, nor Freedom by Shamrock, is responsible for any additional charges regarding SMS alerts. SMS alerts are only available for US phone numbers.
          </p>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <div className="relative">
                <input
                type="text" 
                id="dob"
                name="dob"
                placeholder="MM/DD/YYYY"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                📅
                </span>
            </div>
          </div>
          <div>
            <label htmlFor="citizenship" className="block text-sm font-medium text-gray-700 mb-1">
              Citizenship
            </label>
            <input
              type="text"
              id="citizenship"
              name="citizenship"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Current Education Level
            </label>
            <select
              id="educationLevel"
              name="educationLevel"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {educationLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center space-x-3">
            <button 
                type="button" 
                role="switch" 
                aria-checked="true"
                className="bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
            <span className="text-sm text-gray-700">
              I want schools to contact me about scholarships
            </span>
          </div>
          <p className="text-xs text-gray-500">
            By turning this off, we will not be contacted for any activities besides university recruitment.
          </p>
        </div>

        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            SAVE
          </button>
          <button
            type="button" 
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileStepForm; 