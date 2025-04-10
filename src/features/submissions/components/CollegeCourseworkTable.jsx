import { Edit, XCircle } from 'lucide-react'; // Import icons

const placeholderCourses = [
  { id: '1', course: 'MATH 107', title: 'COLLEGE ALGEBRA', date: '05-2022', credits: 3.0, grade: 'B' },
  { id: '2', course: 'REGI 201', title: 'RELIGIOUS STUDIES', date: '05-2022', credits: 3.0, grade: 'A' },
  { id: '3', course: 'BIOL 101', title: 'GENERAL BIOLOGY', date: '05-2022', credits: 4.0, grade: 'C' },
];

function CollegeCourseworkTable({ collegeName = "Hendrix College (Conway, Arkansas)" }) { 
  
  const handleEditCourse = (courseId) => {
    console.log(`Edit course: ${courseId}`);
    alert(`Edit functionality not implemented for course ${courseId}`);
  };

  const handleDeleteCourse = (courseId) => {
    console.log(`Delete course: ${courseId}`);
    alert(`Delete functionality not implemented for course ${courseId}`);
  };

  return (
    <div className="mt-6 border-t pt-6 border-gray-200">
      {/* College Header and Add Coursework Button */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">{collegeName}</h3>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 text-xs">
          Add Coursework
        </button>
      </div>

      {/* Coursework Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Title
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credits
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th scope="col" className="relative px-4 py-2">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {placeholderCourses.map((course) => (
              <tr key={course.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{course.course}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{course.title}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.date}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.credits.toFixed(1)}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.grade}</td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button 
                    title="Edit Course" 
                    className="text-gray-500 hover:text-indigo-600"
                    onClick={() => handleEditCourse(course.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    title="Delete Course" 
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => handleDeleteCourse(course.id)}
                    >
                    <XCircle className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CollegeCourseworkTable; 