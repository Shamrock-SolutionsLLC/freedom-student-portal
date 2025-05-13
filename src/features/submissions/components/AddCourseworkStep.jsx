import { useState } from 'react';
import CollegeCourseworkTable from './CollegeCourseworkTable';
import TranscriptUpload from './TranscriptUpload';
import AddNewCollegeForm from './AddNewCollegeForm';

function AddCourseworkStep({ onNext, onBack }) {
  const [collegeAdded, setCollegeAdded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showCollegeCourseworkTable, setShowCollegeCourseworkTable] = useState(false);

  const handleAddCollegeClick = (showForm) => {
    setCollegeAdded(showForm);
    setShowLoader(false); // Ensure loader is hidden if Add College is clicked
  };

  const handleLoadTranscriptClick = () => {
    setShowLoader(true);
    setCollegeAdded(false);
  };

  const handleShowCollegeCourseworkTable = (showTable) => {
    setShowLoader(false);
    setShowCollegeCourseworkTable(showTable);
  }

  const handleCloseLoader = () => {
    setShowLoader(false);
  };

  return (
    // Main container for this step
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
      {/* Step Header */}
      <div className="flex justify-between items-center border-b pb-4 border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          STEP 2: ADD YOUR SCHOOL & COURSEWORK
        </h2>
        <button
          onClick={handleLoadTranscriptClick} // Updated onClick
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-md transition duration-200 text-sm"
          disabled={showLoader} // Optionally disable if loader is already showing
        >
          LOAD TRANSCRIPT
        </button>
      </div>

      {/* Main Content Area for Step 2 */}
      <div>
        {showLoader ? (
          // Show Loader if state is true
          <TranscriptUpload onClose={handleCloseLoader} />
        ) : (
          // Otherwise, show Add College button or Table
          <>
            {!collegeAdded && (
              <button
                onClick={() => {
                  handleShowCollegeCourseworkTable(false)
                  handleAddCollegeClick(true)
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-md transition duration-200 text-sm mb-6"
              >
                ADD COLLEGE
              </button>
            )}

            {!collegeAdded && !showCollegeCourseworkTable && !showLoader && (
              <div className="min-h-[200px] border border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400">
                [Add a college or load a transcript to see coursework]
              </div>
            )}

            {collegeAdded && (
              <AddNewCollegeForm handleAddCollegeClick={handleAddCollegeClick} handleShowCollegeCourseworkTable={handleShowCollegeCourseworkTable} />
            )}

            {showCollegeCourseworkTable && <CollegeCourseworkTable />}
          </>
        )}
      </div>


      <div className="flex justify-between pt-6">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          onClick={onBack} // Use the passed handler
        >
          &lt;-- BACK
        </button>
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          onClick={onNext} // Use the passed handler
        >
          NEXT --&gt;
        </button>
      </div>
    </div>
  );
}

export default AddCourseworkStep; 