"use client"
import Countrycard from "./Country-card";
import {
  useGetAllCountryQuery,
  useGetCountryByNameQuery,
} from "@/src/services/countryApi";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [Search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [param, setParam] = useState("All");
  const { data, isSuccess } = useGetAllCountryQuery({});
  const { data: searchData, isSuccess: searchSuccess } =
    useGetCountryByNameQuery(Search);

  useEffect(() => {
    if (isSuccess) {
      setCountry(data);
    }
  }, [isSuccess]);

  const handleSelectChange = (e) => {
    const region = e.target.value;
    setParam(region);
  };

  const filteredCountries = searchSuccess ? searchData : country;

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="relative shadow-md m-6 max-w-[21rem] flex">
          <input
            className=" m-2 ml-12 flex-grow px-4  rounded outline-none"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search for country"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-5 top-6 w-6 h-6 text-gray-400"
          />
        </div>
        <div className="m-6 shadow-md">
          <div className="flex justify-center items-center p-6">
            <select
              className="w-full outline-none"
              onChange={handleSelectChange}
              value={param}
            >
              <option value="All">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 p-5 justify-center">
        {filteredCountries
          ?.filter((c) => param === "All" || c.continents.includes(param))
          .map((country) => (
            <Countrycard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.continents}
              capital={country.capital}
              flag={country.flags.png}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
