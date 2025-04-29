import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import ProfileStepForm from '@/features/submissions/components/ProfileStepForm';
import AddCourseworkStep from '@/features/submissions/components/AddCourseworkStep';
import ReviewSubmissionStep from '@/features/submissions/components/ReviewSubmissionStep';
import SubmissionResultStep from '@/features/submissions/components/SubmissionResultStep';
import SubmissionFormStep from '@/features/submissions/components/SubmissionFormStep';

function NewSubmissionPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (stepData) => {
    console.log("Data from step", currentStep, ":", stepData);
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <AppLayout>
      {currentStep === 1 && (
        <ProfileStepForm
          onNext={handleNext}
        />
      )}

      {currentStep === 2 && (
        <AddCourseworkStep
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 3 && (
        <ReviewSubmissionStep
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 4 && (
        <SubmissionResultStep
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {
        currentStep === 5 && (
          <SubmissionFormStep
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      }
    </AppLayout>
  );
}

export default NewSubmissionPage; 