const API_URL = "https://countries.trevorblades.com/";

export const getAllCountries = async () => {
  const query = `
    {
      countries {
        code
        name
        capital
        continent {
          name
        }
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error("Country data could not be loaded");
  }

  return result.data.countries.map((country) => ({
    name: { common: country.name },
    flags: {
      svg: `https://flagcdn.com/${country.code.toLowerCase()}.svg`,
    },
    capital: country.capital ? [country.capital] : [],
    population: null,
    region: country.continent.name,
    cca3: country.code,
  }));
};

export const getCountryByName = async (name) => {
  const countries = await getAllCountries();

  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(name.toLowerCase())
  );
};

export const getCountriesByRegion = async (region) => {
  const countries = await getAllCountries();

  return countries.filter(
    (country) =>
      country.region.toLowerCase() === region.toLowerCase()
  );
};