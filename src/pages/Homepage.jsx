import AppLayout from '../components/layout/AppLayout';
import TranscriptValueCard from '../features/homepage/components/TranscriptValueCard';
import StartSubmissionCard from '../features/homepage/components/StartSubmissionCard';

function Homepage() {
  return (
    <AppLayout>
      <TranscriptValueCard />
      <StartSubmissionCard />
    </AppLayout>
  );
}

export default Homepage; 