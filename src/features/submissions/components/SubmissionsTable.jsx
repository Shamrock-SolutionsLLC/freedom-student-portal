import { Link } from 'react-router-dom';
import { Download, XCircle } from 'lucide-react';

const submissionsData = [
  { id: 'taule0010404', dateSubmitted: 'April 4, 2025', program: 'GENERAL STUDIES', approvedCredits: 4.0, reportUrl: '/report/taule0010404' },
  { id: 'taule0010329', dateSubmitted: 'March 29, 2025', program: 'BIOCHEMISTRY', approvedCredits: 4.0, reportUrl: '/report/taule0010329' },
];

function SubmissionsTable() {

  const handleDelete = (id) => {
    console.log(`Delete submission: ${id}`);
    alert(`Delete functionality not implemented for ${id}`);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          MY CURRENT SUBMISSIONS
        </h2>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
          DOWNLOAD ALL REPORTS
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submission ID
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Submitted
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Program
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Approved Credits
              </th>
              <th scope="col" className="relative px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissionsData.length > 0 ? (
              submissionsData.map((submission) => (
                <tr key={submission.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    <Link to={submission.reportUrl}>{submission.id}</Link>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.dateSubmitted}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.program}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {submission.approvedCredits.toFixed(1)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button title="Download Report" className="text-gray-500 hover:text-indigo-600">
                      <Download className="h-5 w-5" />
                    </button>
                    <button 
                      title="Delete Submission" 
                      className="text-gray-500 hover:text-red-600"
                      onClick={() => handleDelete(submission.id)}
                    >
                      <XCircle className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-sm text-gray-500">
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubmissionsTable; 