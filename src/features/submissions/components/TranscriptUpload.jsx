import { UploadCloud } from 'lucide-react';

function TranscriptUpload({ onClose }) {

  const handleFileSelect = (event) => {
    const files = event.target.files;
    console.log("Selected files:", files);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 text-center max-w-md mx-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        LOAD TRANSCRIPT
      </h3>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center space-y-3">
        <UploadCloud className="h-12 w-12 text-gray-400" />
        <p className="text-gray-600 font-medium">Drag & drop your files here</p>
        <p className="text-sm text-gray-500">or</p>

        <label
          htmlFor="transcript-upload"
          className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-200 text-sm"
        >
          Select Files
        </label>
        <input
          id="transcript-upload"
          type="file"
          className="hidden"
          multiple
          accept=".pdf,.jpeg,.jpg,.png"
          onChange={handleFileSelect}
        />

        <p className="text-xs text-gray-400 pt-2">
          Supports: PDF, JPEG, PNG (max 10MB per file)
        </p>
      </div>

       <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
       </button>
    </div>
  );
}

export default TranscriptUpload; 