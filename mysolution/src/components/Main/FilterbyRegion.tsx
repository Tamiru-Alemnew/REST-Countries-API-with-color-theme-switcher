import React from 'react'

function FilterbyRegion() {
  return (
    <div className="m-6 shadow-md">
      <div className="flex justify-center items-center p-6">
        <select className="w-full">
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default FilterbyRegion