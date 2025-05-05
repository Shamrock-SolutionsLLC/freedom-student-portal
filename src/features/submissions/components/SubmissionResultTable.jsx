import { useMemo, useState } from "react";
import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const placeholderCourses = [
  { id: '1', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '2', schoolName: 'HENDRIX COLLEGE', course: 'REGI 107', date: '05-2022', credits: 3.0, grade: 'B', status: 'UNDER_REVIEW' },
  { id: '3', schoolName: 'HENDRIX COLLEGE', course: 'BIOL 201', date: '05-2022', credits: 3.0, grade: 'A', status: 'WILL_NOT_TRANSFER' },
  { id: '4', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '5', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
  { id: '6', schoolName: 'HENDRIX COLLEGE', course: "BIOL 101", date: '05-2022', credits: 4.0, grade: 'C', courseId: 'BIO 100\nBIO100L', courseTitle: 'HORIZONS IN BIOLOGY\nHORIZONS LAB', courseCredits: '3.0\n1.0', status: 'APPROVED' },
];

const fallbackData = []

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

const columnHelper = createColumnHelper()

export const SubmissionResultTable = () => {
  const columns = useMemo(() => [
    columnHelper.accessor('schoolName', {
      header: 'School name',
      cell: ({ cell, row }) => <>
        <strong className="block -indent-7">{row.original.status}</strong>
        {cell.getValue()}</>,
      meta: {
        headerClassName: 'pl-0',
        bodyClassName: 'pl-0 relative',
      }
    }),
    columnHelper.accessor('course', {
      header: 'Course',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: info => info.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: 'text-center',
      }
    }),
    columnHelper.accessor('credits', {
      header: 'Credits',
      cell: info => info.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: 'text-center',
      }
    }),
    columnHelper.accessor('grade', {
      header: 'Grade',
      cell: info => info.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: 'text-center',
      }
    }),
    columnHelper.accessor('courseId', {
      header: 'Course id',
      cell: info => info.getValue(),
      meta: {
        bodyClassName: '!whitespace-pre font-semibold',
      }
    }),
    columnHelper.accessor('courseTitle', {
      header: 'Course title',
      cell: info => info.getValue(),
      meta: {
        bodyClassName: '!whitespace-pre font-semibold',
      }
    }),
    columnHelper.accessor('courseCredits', {
      header: 'Course credits',
      cell: info => info.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: '!whitespace-pre font-semibold text-center',
      }
    }),
  ], []);

  const [data, setData] = useState(placeholderCourses);

  const table = useReactTable({
    columns,
    data: data ?? fallbackData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='relative'>
      <div className="w-full h-7 absolute bg-white top-0 -left-6 z-[1]"></div>
      <Table wrapperClassName='!w-auto max-h-[300px] overflow-x-hidden -mx-6 pr-6' className='ml-8'>
        <TableHeader className='[&_tr]:border-none [&_th]:sticky [&_th]:top-0 [&_th]:bg-white [&_th]:z-[1] [&_th]:shadow-[inset_0_-1px_0_#ddd]'>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {
                headerGroup.headers.map(header => (
                  <TableHead key={header.id} scope="col" className={header.column.columnDef.meta?.headerClassName}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))
              }
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, index) => placeholderCourses[index].status === 'APPROVED' ? (
            <TableRow key={row.id} className='border-b border-solid border-gray-200 [&_td]:pt-4 [&_td]:pb-6'>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className={cell.column.columnDef.meta?.bodyClassName}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              )
              )}
            </TableRow>
          ) : (
            <TableRow key={row.id} className='border-b border-solid border-gray-200 [&_td]:pt-4 [&_td]:pb-6'>
              {row.getVisibleCells().map(cell => {
                if (cell.column.id === 'courseId') {
                  return <TableCell colSpan='3' key={cell.id}>
                    {
                      statusMapping[placeholderCourses[index].status].information
                    }
                  </TableCell>
                }
                if (cell.column.id !== 'courseTitle' && cell.column.id !== 'courseCredits') {
                  return (
                    <TableCell key={cell.id} className={cell.column.columnDef.meta?.bodyClassName}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                }
              }
              )}
            </TableRow>
          )
          )}
        </TableBody>
      </Table>
    </div>);
}