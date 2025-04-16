export default function SubmissionFooter(props) {
  return <div className="fixed inset-x-1.5 bottom-1.5 bg-white rounded-lg shadow-md border border-gray-200" {...props}>
    <div className="container mx-auto px-8 sm:px-12 lg:px-24">
      {props.children}
    </div>
  </div>
}