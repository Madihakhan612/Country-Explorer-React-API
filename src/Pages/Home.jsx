import { useState } from "react";
import useCountries from "../Hook/UseCountries.js";
import SearchBar from "../Components/SearchBar.jsx";
import CountryCard from "../Components/CountryCard.jsx";
import Loader from "../Components/Loader.jsx";

const Home = () => {
  const { countries, loading, error } = useCountries();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      <h1 className="text-3xl font-bold text-center mb-6">
        Explore Countries
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <p className="text-center mt-10 text-gray-600">
          No country found!
        </p>
      )}

    </div>
  );
};

export default Home;