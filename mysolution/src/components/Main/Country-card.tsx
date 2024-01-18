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
    <div className="shadow-md max-w-[200px] m-3">
      <div>
        <Image
          width={200}
          height={100}
          src={flag}
          alt={name}
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h1 className="font-bold mb-3">{name}</h1>
        <p>Population: {population}</p>
        <p>Region:{region}</p>
        <p>Capital:{capital}</p>
      </div>
    </div>
  );
}

export default Countrycard