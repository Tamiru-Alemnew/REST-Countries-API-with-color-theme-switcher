import { link } from 'fs';
import Image from 'next/image'
import Link from 'next/link';
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
    <Link href={`/${name}`}>
      <div className="shadow-md w-[230px] h-[330px] m-3 hover:scale-105 transition-transform duration-300 dark:bg-gray-600 dark:text-gray-200">
        <div className="w-[230px] h-[150px] relative">
          <Image src={flag} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <h1 className="font-bold mb-3 ">{name}</h1>
          <div className="text-gray-700">
            <p className="whitespace-nowrap font-semibold dark:text-gray-200">
              Population: <span className="font-normal">{population}</span>
            </p>
            <p className="whitespace-nowrap font-semibold dark:text-gray-200">
              Region: <span className="font-normal">{region}</span>
            </p>
            <p className="font-semibold dark:text-gray-200">
              Capital: <span className="font-normal">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Countrycard