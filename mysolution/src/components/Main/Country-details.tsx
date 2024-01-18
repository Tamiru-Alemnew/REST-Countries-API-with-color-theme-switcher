"use client"
import {useGetExactCountryQuery } from "@/src/services/countryApi";
import Image from "next/image"
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Countrydetails() {
   const {name} = useParams()
   const {data: Country , isSuccess} = useGetExactCountryQuery(name)
    const router = useRouter();
  return (
    <div className="m-12 overflow-x-hidden dark:bg-gray-700 dark:text-gray-200">
      <button
        className="shadow-md px-5 py-2 mb-24 flex items-center gap-4"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      {isSuccess && (
        <div className="flex flex-col md:flex-row w-full justify-between gap-24">
          <Image
            width={500}
            height={400}
            src={Country[0]?.flags?.png}
            alt="country"
          />

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="font-bold mb-7 text-xl md:text-4xl">
              {Country[0]?.name?.common}
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <p className="font-semibold">
                  Native Name:{" "}
                  <span className="font-normal">
                    {
                      Country[0]?.name?.nativeName[
                        Object.keys(Country[0]?.name?.nativeName)[0]
                      ]?.common
                    }
                  </span>
                </p>
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-normal">{Country[0]?.population}</span>
                </p>
                <p className="font-semibold">
                  Region:{" "}
                  <span className="font-normal">{Country[0]?.region}</span>
                </p>
                <p className="font-semibold">
                  Sub Region:{" "}
                  <span className="font-normal">{Country[0]?.subregion}</span>
                </p>
                <p className="font-semibold">
                  Capital:{" "}
                  <span className="font-normal">{Country[0]?.capital[0]}</span>{" "}
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-normal">{Country[0]?.tld[0]}</span>
                </p>
                <p className="font-semibold">
                  Currencies:{" "}
                  <span className="font-normal">
                    {
                      (
                        Object.values(Country[0]?.currencies)[0] as {
                          name?: string;
                        }
                      )?.name
                    }
                  </span>
                </p>
                <p className="font-semibold ">
                  Languages:{" "}
                  <span className="font-normal">
                    {Object.values(Country[0]?.languages).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex mt-12 items-center">
              <p className="font-semibold whitespace-nowrap">
                Border Countries:{" "}
              </p>
              <div className="flex">
                {Country[0]?.borders?.map((borderCountry:any) => (
                  <button
                    key={borderCountry}
                    className="shadow-md mx-3 py-2 px-6"
                  >
                    {borderCountry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Countrydetails