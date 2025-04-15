import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const placeholderPrograms = [
  { value: 'general-studies', text: 'GENERAL STUDIES' },
  { value: 'biochemistry', text: 'BIOCHEMISTRY' }
];

export default function ReviewSubmissionDropdown() {
  return <Select>
    <SelectTrigger>
      <SelectValue placeholder='Select Program of Study' />
    </SelectTrigger>
    <SelectContent>
      {placeholderPrograms.map((program) => (
        <SelectItem key={program.value} value={program.value}>
          {program.text}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
}