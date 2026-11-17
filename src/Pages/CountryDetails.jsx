import { useParams, Link } from "react-router-dom";
import useCountries from "../Hook/UseCountries.js";
import Loader from "../Components/Loader.jsx";

const CountryDetails = () => {
  const { name } = useParams();
  const { countries, loading, error } = useCountries();

  if (loading) return <Loader />;

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  const country = countries.find(
    (item) =>
      item.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) {
    return <h2 className="text-center mt-10">Country not found!</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link
        to="/"
        className="inline-block mb-8 px-5 py-2 bg-white shadow rounded"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full max-h-72 object-contain mb-6"
        />

        <h1 className="text-3xl font-bold mb-5">
          {country.name.common}
        </h1>

        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> N/A</p>
        <p><strong>Country Code:</strong> {country.cca3}</p>
      </div>
    </div>
  );
};

export default CountryDetails;