import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import SubmissionFooter from "./SubmissionFooter";
import { SubmissionResultTable } from "./SubmissionResultTable";
import cardChipIcon from '@/assets/card-chip-icon.png';

const estimatedValue = "$ 4,800";
const creditHourRate = "$1,200";

export default function SubmissionResultStep({ onNext, onBack }) {
  return <>
    <Card className='mt-9'>
      <CardHeader className='!pb-2 pl-2.5'>
        <div className="grid grid-cols-[1fr_190px_150px] gap-x-3 w-full items-center">
          <div className='flex-2'>
            <h3 className="flex flex-col leading-[1.2] text-center text-lg">
              <strong className='font-bold'>CONGRATULATIONS!</strong>
              <span>
                YOUR PRELIMINARY TRANSFER REPORT IS READY
              </span>
            </h3>
            <div className="flex mt-4 justify-between">
              <div>
                <p className="italic"><strong>Submission ID: </strong><span className="text-red-600">taule0010404</span></p>
                <p className='italic'><strong>Program: </strong><span className="text-red-600">General Studies</span></p>
              </div>
              <div className="flex items-center gap-x-4">
                <p className='italic'>Auto-Approved Transfer Courses</p>
                <span className="flex w-11 h-8 text-lg border border-black rounded-md justify-center items-center not-italic">4</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#10192d] text-white p-3 rounded-md text-center flex-shrink-0">
              <p className="text-3xl font-bold mb-1">{estimatedValue}</p>
              <p><img className="w-11 mt-2" src={cardChipIcon} /></p>
              <p className="text-xs font-semibold mt-3">
                HOW MUCH CAN YOU SAVE
              </p>
            </div>
          </div>
          <div className="text-center">
            Estimated value of your transfer credits<br />
            <strong>{creditHourRate}/ credit hour</strong>
          </div>
        </div>

      </CardHeader>
      <CardContent className='px-9 pb-9'>
        <SubmissionResultTable />
      </CardContent>
    </Card>
    <SubmissionFooter>
      <div className="flex justify-between items-center py-2">
        <Button onClick={onBack}>&lt;-- BACK</Button>
        <a href='#' className="text-sm italic">DOWNLOAD REPORT</a>
        <Button onClick={onNext}>MY SUBMISSION</Button>
      </div>
    </SubmissionFooter>
  </>
}