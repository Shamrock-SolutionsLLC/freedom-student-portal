import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/Form";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectIcon, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { IoCaretDownSharp } from 'react-icons/io5';
import { Checkbox } from '@/components/ui/Checkbox';

const dropdownPlaceholder = [
  { value: 'general-studies', text: 'GENERAL STUDIES' },
  { value: 'biochemistry', text: 'BIOCHEMISTRY' }
]

export default function SubmissionResultStep({ onBack, onNext }) {
  const Legend = ({ children }) => (<legend className='text-red-600 text-center font-semibold mb-1.5'>{children}</legend>)

  const form = useForm()
  return <Form {...form}>
    <form onSubmit={form.handleSubmit(() => { })}>
      <div className="grid grid-cols-4 gap-x-12 text-sm">
        <div className='space-y-5'>
          <div>
            <Legend>COURSE INFO</Legend>
            <Card className='!border-black rounded-sm'>
              <CardContent className='p-4 pt-1.5 space-y-3'>
                <FormField control={form.control}
                  name='class-duration'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class Duration:</FormLabel>
                      <FormControl>
                        <Input className='!border-black border border-solid' />
                      </FormControl>
                    </FormItem>
                  )} />
              </CardContent>
            </Card>
          </div>
          <div>
            <Legend>EMPLOYMENT INFO</Legend>
            <Card className='!border-black rounded-sm'>
              <CardContent className='p-4 pt-1.5 space-y-3'>
                <FormField control={form.control}
                  name='job-hours'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Hours:</FormLabel>
                      <FormControl>
                        <Input className='!border-black border border-solid' />
                      </FormControl>
                    </FormItem>
                  )} />
              </CardContent>
            </Card>
          </div>
          <div>
            <Legend>READING ASSIGNMENTS</Legend>
            <Card className='!border-black rounded-sm'>
              <CardContent className='p-4 pt-1.5 space-y-3'>
                <FormField control={form.control}
                  name='pages-per-week'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pages Per Week:</FormLabel>
                      <FormControl>
                        <Input className='!border-black border border-solid' />
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='page-density'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Page Density:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='difficulty'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='purpose'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <p className='text-center flex flex-col'>
                  <strong>Calculated Reading Rate:</strong>
                  <span>75 pages per hour</span>
                </p>
                <FormField control={form.control}
                  name='purpose'
                  render={({ field }) => (
                    <FormItem className='flex justify-center'>
                      <FormControl>
                        <Checkbox id='purpose' />
                      </FormControl>
                      <FormLabel className='font-normal ml-1'>adjust pages</FormLabel>
                    </FormItem>
                  )} />
              </CardContent>

            </Card>
          </div>
        </div>

        <div className='space-y-5'>
          <div>
            <Legend>VIDEO ASSIGNMENTS</Legend>
            <Card className='!border-black rounded-sm'>
              <CardContent className='p-4 pt-1.5 space-y-3'>
                <FormField control={form.control}
                  name='hours-per-week'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hours Per Week:</FormLabel>
                      <FormControl>
                        <Input className='!border-black border border-solid' />
                      </FormControl>
                    </FormItem>
                  )} />
              </CardContent>
            </Card>
          </div>
          <div>
            <Legend>WRITING ASSIGNMENTS</Legend>
            <Card className='!border-black rounded-sm'>
              <CardContent className='p-4 pt-1.5 space-y-3'>
                <FormField control={form.control}
                  name='pages-per-semester'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pages Per Semester:</FormLabel>
                      <FormControl>
                        <Input className='!border-black border border-solid' />
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='page-density'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Page Density:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='genre'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genre:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField control={form.control}
                  name='drafting'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drafting:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                            <IoCaretDownSharp className='h-7 w-7 text-black' />
                          </SelectIcon>}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {dropdownPlaceholder.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                <p className='text-center flex flex-col'>
                  <strong>Calculated Writing Rate:</strong>
                  <span>0.50 hours per page</span>
                </p>
                <FormField control={form.control}
                  name='purpose'
                  render={({ field }) => (
                    <FormItem className='flex justify-center'>
                      <FormControl>
                        <Checkbox id='purpose' />
                      </FormControl>
                      <FormLabel className='font-normal ml-1'>adjust pages</FormLabel>
                    </FormItem>
                  )} />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='space-y-5'>
          <Legend>SOCIAL MEDIA ASSIGNMENTS</Legend>
          <Card className='!border-black rounded-sm'>
            <CardContent className='p-4 pt-1.5 space-y-3'>
              <FormField control={form.control}
                name='social-media-posts-per-week'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Media Posts Per Week:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='format'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Format:</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className='!min-w-0 h-9' icon={<SelectIcon asChild className='border border-black w-5 h-5 rounded-sm'>
                          <IoCaretDownSharp className='h-7 w-7 text-black' />
                        </SelectIcon>}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {dropdownPlaceholder.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='average-length'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Length (Words/Minutes):</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <p className='text-center flex flex-col'>
                <strong>Estimated Hours:</strong>
                <span>1 hour per week</span>
              </p>
              <FormField control={form.control}
                name='purpose'
                render={({ field }) => (
                  <FormItem className='flex justify-center'>
                    <FormControl>
                      <Checkbox id='purpose' />
                    </FormControl>
                    <FormLabel className='font-normal ml-1'>adjust hours</FormLabel>
                  </FormItem>
                )} />
            </CardContent>
          </Card>

          <Legend>EXAMS</Legend>
          <Card className='!border-black rounded-sm'>
            <CardContent className='p-4 pt-1.5 space-y-3'>
              <FormField control={form.control}
                name='exams-per-semester'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exams per Semester:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='study-hours-per-exam'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Study Hours per Exam:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='purpose'
                render={({ field }) => (
                  <FormItem className='flex justify-center'>
                    <FormControl>
                      <Checkbox id='purpose' />
                    </FormControl>
                    <FormLabel className='font-normal ml-1'>at-home Exams</FormLabel>
                  </FormItem>
                )} />
            </CardContent>
          </Card>
        </div>

        <div className='space-y-5'>
          <Legend>OTHER ASSIGNMENTS</Legend>
          <Card className='!border-black rounded-sm'>
            <CardContent className='p-4 pt-1.5 space-y-3'>
              <FormField control={form.control}
                name='assignments-per-semester'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignments per Semester:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='hours-per-assignment'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hours per Assignments:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
            </CardContent>
          </Card>
          <Legend>CLASS MEETINGS</Legend>
          <Card className='!border-black rounded-sm'>
            <CardContent className='p-4 pt-1.5 space-y-3'>
              <FormField control={form.control}
                name='live-meetings-per-week'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Meetings per Week:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name='meeting-length'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Length:</FormLabel>
                    <FormControl>
                      <Input className='!border-black border border-solid' />
                    </FormControl>
                  </FormItem>
                )} />
            </CardContent>
          </Card>

          <Legend>WORKLOAD ESTIMATES</Legend>
          <Card className='!border-black rounded-sm !bg-[#e3fae3]'>
            <CardContent className='text-right p-4 pr-2 space-y-3'>
              <p><strong>TOTAL:</strong> 0 hrs/week</p>
              <p><strong>INDEPENDENT:</strong> 0 hrs/week</p>
              <p><strong>CONTACT:</strong> 0 hrs/week</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </form >
  </Form >
}