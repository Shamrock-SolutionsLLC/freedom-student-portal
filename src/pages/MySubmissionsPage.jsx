import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import SubmissionsTable from '../features/submissions/components/SubmissionsTable';

function MySubmissionsPage() {
  return (
    <AppLayout>
      <SubmissionsTable />
      <div className="mt-8 text-center">
        <Link
          to="/new-submission"
          className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-md transition duration-200 text-sm uppercase tracking-wider"
        >
          New Submission
        </Link>
      </div>
    </AppLayout>
  );
}

export default MySubmissionsPage; 