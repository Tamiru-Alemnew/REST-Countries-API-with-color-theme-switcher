import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="relative shadow-md m-6 max-w-[21rem] flex">
      <input
        className=" m-2 ml-12 flex-grow px-4  rounded"
        type="text"
        placeholder="search for country"
      />
      <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-6 w-6 h-6 text-gray-400"/>
    </div>
  );
}

export default SearchBar;
