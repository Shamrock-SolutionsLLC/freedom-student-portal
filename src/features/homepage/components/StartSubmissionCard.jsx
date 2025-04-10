import { Link } from 'react-router-dom'; 

function StartSubmissionCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        TRANSFER CREDIT ANSWERS IN AS LITTLE AS<br/> 3 MINUTES
      </h2>
      <Link 
        to="/new-submission" 
        className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded transition duration-200"
      >
        START NOW
      </Link>
    </div>
  );
}

export default StartSubmissionCard; 