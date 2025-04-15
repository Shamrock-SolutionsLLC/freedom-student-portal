import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const placeholderCourses = [
  { id: '1', schoolName: 'HENDRIX COLLEGE', course: "MATH 107", courseTitle: 'COLLEGE ALGEBRA', date: '05-2022', credits: 3.0, grade: 'B' },
  { id: '2', schoolName: 'HENDRIX COLLEGE', course: 'REGI 201', courseTitle: 'RELIGIOUS STUDIES', date: '05-2022', credits: 3.0, grade: 'A' },
  { id: '3', schoolName: 'HENDRIX COLLEGE', course: 'BIOL 101', courseTitle: 'GENERAL BIOLOGY', date: '05-2022', credits: 4.0, grade: 'C' },
];

export const ReviewSubmissionTable = () => {
  return (
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead scope="col" className='pl-0'>
            School name
          </TableHead>
          <TableHead scope="col">
            Course
          </TableHead>
          <TableHead scope="col">
            Course title
          </TableHead>
          <TableHead scope="col" className='!text-center'>
            Date
          </TableHead>
          <TableHead scope="col" className='!text-center'>
            Credits
          </TableHead>
          <TableHead scope="col" className='!text-center'>
            Grade
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholderCourses.map((course, index) => {
         const firstRowClassName = index === 0 ? ' pt-1.5' : ''
         return <TableRow key={course.id}>
            <TableCell className={`pl-0${firstRowClassName}`}>{course.schoolName}</TableCell>
            <TableCell className={firstRowClassName}>{course.course}</TableCell>
            <TableCell className={firstRowClassName}>{course.courseTitle}</TableCell>
            <TableCell className={`text-center${firstRowClassName}`}>{course.date}</TableCell>
            <TableCell className={`text-center${firstRowClassName}`}>{course.credits.toFixed(1)}</TableCell>
            <TableCell className={`text-center${firstRowClassName}`}>{course.grade}</TableCell>
          </TableRow>
})}
      </TableBody>
    </Table>
  );
}