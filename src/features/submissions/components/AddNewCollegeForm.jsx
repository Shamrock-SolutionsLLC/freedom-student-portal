import { useForm } from 'react-hook-form'
import { RxCross2 } from "react-icons/rx";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/Form";
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';
import searchIcon from '../../../assets/search-icon.png';

export default function AddNewCollegeForm({ handleAddCollegeClick, handleShowCollegeCourseworkTable }) {
  const form = useForm()

  return <div className="border border-gray-300 rounded-lg py-2 px-6 max-w-lg mx-auto mt-6">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => { })}>
        <h3 className='text-xl text-center font-bold mb-7'>ADD NEW COLLEGE</h3>
        <div className='px-3 mb-6'>
          <FormField control={form.control}
            name='class-duration'
            render={({ field }) => (
              <FormItem className='relative'>
                <FormControl>
                  <Input className='!border-black border border-solid rounded-sm text-sm' placeholder='Search for school by name' />
                </FormControl>
                <Button variant='icon' size='sm' className='absolute !w-7 !h-7 right-1 top-1'><img src={searchIcon} className='w-6 h-6 mx-auto' /></Button>
              </FormItem>
            )} />
        </div>
        <div className='border border-solid border-gray-200 rounded-sm mb-6 pb-6'>
          <Table wrapperClassName='py-4 px-6'>
            <TableHeader>
              <TableRow>
                <TableHead className='!px-0 !text-[#6f7681] font-normal'>
                  SCHOOL NAME
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=' text-[#6f7681]'>
              <TableRow>
                <TableCell className='!px-0 !text-[#6f7681]'>
                  <div className='flex justify-between items-center'>
                    <span>College Name</span>
                    <Button variant='icon' className='rounded-full flex justify-center items-center !w-4 !h-4 !p-0 bg-black'><RxCross2 className='text-white w-3 h-3' /></Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="px-12">
          <div className="flex justify-between py-2">
            <Button className='px-10' variant='secondary' size='sm' onClick={() => handleAddCollegeClick(false)}>BACK</Button>
            <Button className='px-10' size='sm' variant='outline' onClick={() => {
              handleAddCollegeClick(false);
              handleShowCollegeCourseworkTable(true)
            }}>NEXT</Button>
          </div>
        </div>
      </form>
    </Form>
  </div>
}