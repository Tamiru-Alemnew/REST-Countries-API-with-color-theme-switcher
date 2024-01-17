import React from 'react'
import SearchBar from './SearchBar'
import FilterbyRegion from './FilterbyRegion'

function Home() {
  return (
    <div className="">
      <div className='flex justify-between'>
        <SearchBar />
        <FilterbyRegion />
      </div>
    </div>
  );
}

export default Home