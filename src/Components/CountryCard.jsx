import React from "react"
import { Link } from "react-router-dom";
import formatNumber from "../Utils/FormatNumber.js";


const CountryCard = ({ country }) => {
  return (
      <Link
      to={`/country/${encodeURIComponent(country.name.common)}`}
       className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">
          {country.name.common}
        </h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population
            ? formatNumber(country.population)
            : "N/A"}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;