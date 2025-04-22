import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const placeholderCourses = [
  { id: '1', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '2', schoolName: 'HENDRIX COLLEGE', course: 'REGI 107', date: '05-2022', credits: 3.0, grade: 'B', status: 'UNDER_REVIEW' },
  { id: '3', schoolName: 'HENDRIX COLLEGE', course: 'BIOL 201', date: '05-2022', credits: 3.0, grade: 'A', status: 'WILL_NOT_TRANSFER' },
  { id: '4', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '5', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '6', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
];

const statusMapping = {
  APPROVED: {
    tagName: 'APPROVED'
  },
  UNDER_REVIEW: {
    tagName: 'UNDER REVIEW',
    information: 'Course is under further review'
  },
  WILL_NOT_TRANSFER: {
    tagName: 'WILL NOT TRANSFER',
    information: 'Course will not transfer for current program selected'
  }
}

export const SubmissionResultTable = () => {
  return (
    <div className='relative'>
      <div className="w-full h-7 absolute bg-white top-0 -left-6 z-[1]"></div>
      <Table wrapperClassName='!w-auto max-h-[300px] overflow-x-hidden -mx-6 pr-6' className='ml-8'>
        <TableHeader className='[&_tr]:border-none [&_th]:sticky [&_th]:top-0 [&_th]:bg-white [&_th]:z-[1] [&_th]:shadow-[inset_0_-1px_0_#ddd]'>
          <TableRow>
            <TableHead scope="col" className='pl-0'>
              School name
            </TableHead>
            <TableHead scope="col">
              Course
            </TableHead>
            <TableHead scope="col">
              Date
            </TableHead>
            <TableHead scope="col" className='!text-center'>
              Credits
            </TableHead>
            <TableHead scope="col" className='!text-center'>
              Grade
            </TableHead>
            <TableHead scope="col">
              Course id
            </TableHead>
            <TableHead scope="col">
              Course title
            </TableHead>
            <TableHead scope="col">
              Course credits
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {placeholderCourses.map((course) => {
            return <TableRow className='border-b border-solid border-gray-200 [&_td]:pt-4 [&_td]:pb-6' key={course.id}>
              <TableCell className='pl-0 relative'>
                <strong className="block -indent-7">{statusMapping[course.status].tagName}</strong>
                {course.schoolName}
              </TableCell>
              <TableCell>{course.course}</TableCell>
              <TableCell className='text-center'>{course.date}</TableCell>
              <TableCell className='text-center'>{course.credits.toFixed(1)}</TableCell>
              <TableCell className='text-center'>{course.grade}</TableCell>
              {
                course.status === 'APPROVED' ? (
                  <>
                    <TableCell className='whitespace-pre font-semibold'>{course.courseId}</TableCell>
                    <TableCell className='!whitespace-pre font-semibold'>{course.courseTitle}</TableCell>
                    <TableCell className='!whitespace-pre font-semibold text-center'>{course.courseCredits}</TableCell>
                  </>
                )
                  : <TableCell colSpan='3'>
                    {
                      statusMapping[course.status].information
                    }
                  </TableCell>
              }
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>);
}