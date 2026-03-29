export default function HospitalCard({ hospital, onClick }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
      
      {/* Name */}
      <h3 className="text-lg font-bold text-blue-600">
        {hospital.name}
      </h3>

      {/* City + Type */}
      <p className="text-gray-600 mt-1">
        {hospital.city}, India • {hospital.type}
      </p>

      {/* Rating */}
      <p className="mt-1">⭐ {hospital.rating}</p>

      {/* Treatments */}
      <div className="mt-2">
        <p className="text-sm font-semibold">Treatments:</p>
        <p className="text-gray-600 text-sm">
          {hospital.treatments.join(", ")}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onClick}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </button>
    </div>
  );
}