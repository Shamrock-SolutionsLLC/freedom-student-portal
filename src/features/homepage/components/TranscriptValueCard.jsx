
const estimatedValue = "$ 00,000"; 
const creditHourRate = "$1,200";

function TranscriptValueCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden p-6 flex justify-between items-center mb-6">
      <div className="pr-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          UNOFFICIAL TRANSCRIPT EVALUATION
        </h2>
        <p className="text-gray-600 text-sm">
          Estimated value of your transfer credits, based on preliminary approvals and current average hourly rate of <span className="font-semibold">{creditHourRate}/ credit hour</span>
        </p>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg text-center flex-shrink-0">
        <div className="text-3xl font-bold mb-1">{estimatedValue}</div>
        <button className="bg-gray-600 hover:bg-gray-500 text-xs font-semibold py-1 px-3 rounded uppercase tracking-wider">
          HOW MUCH CAN YOU SAVE
        </button>
      </div>
    </div>
  );
}

export default TranscriptValueCard; 