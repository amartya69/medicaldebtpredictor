export default function TreatmentCard({ treatment, onClick }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
      
      {/* Treatment Name */}
      <h3 className="text-lg font-bold text-green-600">
        {treatment.name}
      </h3>

      {/* Cost */}
      <p className="text-gray-700 mt-2">
        Estimated Cost: <span className="font-semibold">₹ {treatment.cost}</span>
      </p>

      {/* Range */}
      <p className="text-gray-600 text-sm">
        Range: {treatment.range}
      </p>

      {/* Insurance */}
      <p className="text-gray-600 text-sm mt-1">
        Insurance: {treatment.insurance}
      </p>

      {/* Button */}
      <button
        onClick={onClick}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Check Financial Risk
      </button>
    </div>
  );
}