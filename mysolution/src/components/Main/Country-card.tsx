import Image from 'next/image'
import React from 'react'
interface CountrycardProps {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
    }

function Countrycard(
    {name, population , region, capital, flag}: CountrycardProps
) {
  return (
    <div className="shadow-md max-w-[210px] m-3">
      <div>
        <Image width={210} height={100} src={flag} alt={name} objectFit="fit" />
      </div>
      <div className="p-6">
        <h1 className="font-bold mb-3 className='whitespace-nowrap'">{name}</h1>
        <p className="whitespace-nowrap">Population: {population}</p>
        <p className="whitespace-nowrap">Region: {region}</p>
        <p className="whitespace-nowrap ">Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Countrycard