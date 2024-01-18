"use client"
import SearchBar from './SearchBar'
import FilterbyRegion from './FilterbyRegion'
import Countrycard from './Country-card';
import { useGetCountryByRegionQuery } from '@/src/services/countryApi';

function Home() {
  const { data} = useGetCountryByRegionQuery('Africa')
  console.log(data)

  return (
    <div className="">
      <div className="flex justify-between">
        <SearchBar />
        <FilterbyRegion />
      </div>
      <div className='flex flex-wrap gap-7 p-5 justify-center'>
        {data?.map((country) => (
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

export default Home