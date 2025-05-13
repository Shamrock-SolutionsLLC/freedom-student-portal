import { useMemo, useState } from 'react';
import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const placeholderCourses = [
  { id: '1', schoolName: 'HENDRIX COLLEGE', course: "MATH 107", courseTitle: 'COLLEGE ALGEBRA', date: '05-2022', credits: 3.0, grade: 'B' },
  { id: '2', schoolName: 'HENDRIX COLLEGE', course: 'REGI 201', courseTitle: 'RELIGIOUS STUDIES', date: '05-2022', credits: 3.0, grade: 'A' },
  { id: '3', schoolName: 'HENDRIX COLLEGE', course: 'BIOL 101', courseTitle: 'GENERAL BIOLOGY', date: '05-2022', credits: 4.0, grade: 'C' },
];

const columnHelper = createColumnHelper()

const fallbackData = []

export const ReviewSubmissionTable = () => {
  const columns = useMemo(() => [
    columnHelper.accessor('schoolName', {
      header: 'School name',
      cell: ({ cell, row }) => cell.getValue(),
      meta: {
        headerClassName: 'pl-0',
        bodyClassName: 'pl-0',
      }
    }),
    columnHelper.accessor('course', {
      header: 'Course',
      cell: ({ cell, row }) => cell.getValue(),
    }),
    columnHelper.accessor('courseTitle', {
      header: 'Course title',
      cell: ({ cell, row }) => cell.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: ({ cell, row }) => cell.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: '!text-center',
      }
    }),
    columnHelper.accessor('credits', {
      header: 'Credits',
      cell: ({ cell, row }) => cell.getValue().toFixed(1),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: '!text-center',
      }
    }),
    columnHelper.accessor('grade', {
      header: 'Grade',
      cell: ({ cell, row }) => cell.getValue(),
      meta: {
        headerClassName: '!text-center',
        bodyClassName: '!text-center',
      }
    }),
  ], [])

  const [data, setData] = useState(placeholderCourses);

  const table = useReactTable({
    columns,
    data: data ?? fallbackData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table >
      <TableHeader>
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
        {table.getRowModel().rows.map((row, index) =>
          <TableRow key={row.id} className={index === 0 ? '[&_td]:pt-1.5' : ''}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id} className={cell.column.columnDef.meta?.bodyClassName}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}