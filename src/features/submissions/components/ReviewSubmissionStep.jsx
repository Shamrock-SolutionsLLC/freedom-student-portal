import { CiCircleCheck } from "react-icons/ci";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import ReviewSubmissionDropdown from "./ReviewSubmissionDropdown";
import { ReviewSubmissionTable } from "./ReviewSubmissionTable";

export default function ReviewSubmissionStep({ onNext, onBack }) {
  return <>
    <Card>
      <CardHeader title="STEP 3: SUBMIT FOR REVIEW" />
      <CardContent className='pb-7'>
        <div className="mx-auto w-[450px]">
          <p className='mb-8'>You're ALMOST DONE! Just need to submit and we will</p>
          <div className="flex gap-x-2.5 items-center">
            <CiCircleCheck className="text-green-700" />
            <p>Show you your immediate savings,</p>
          </div>
          <div className="flex gap-x-2.5 items-center">
            <CiCircleCheck className="text-green-700" />
            <p>Validate and confirm your <span className="text-red-600 underline">auto-approved</span> transfers,</p>
          </div>
          <div className="flex gap-x-2.5 items-center">
            <CiCircleCheck className="text-green-700" />
            <p>Initiate the review process for any <span className="text-red-600 underline">pending courses</span>.</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className='mt-9'>
      <CardHeader className='py-1 pl-2.5'>
        <h3 className="flex gap-x-3 items-center italic">
          <span className="flex w-11 h-11 text-lg border border-black rounded-md justify-center items-center not-italic">10</span>
          Estimated Transfer Credits
        </h3>
        <div>
          <ReviewSubmissionDropdown />
        </div>
      </CardHeader>
      <CardContent className='px-9'>
        <ReviewSubmissionTable />
        <div className="flex justify-between pt-6">
          <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200" onClick={onBack}>&lt;-- BACK</button>
          <button type="button" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200" onClick={onNext}>SUBMIT</button>
        </div>
      </CardContent>
    </Card>
  </>
}