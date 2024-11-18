import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill } from "react-icons/fa"

function PropertyCard({ name, type, beds, baths, square_feet, location: { city, state, }, rates, img = "a2.jpg" }) {
    function getRatesDisplay() {
        console.log("this is get rates display...", rates)
        return Object.keys(rates).map((key, id) => {
            return (
                <h3
                    key={id}
                    className={`absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right mt-${id * 4}`}
                >
                    {`$ ${rates[key]}/${key}`}
                </h3>
            )
        })
    }
    return (
        <div>
            <div className="rounded-xl shadow-md relative">
                <Image
                    src={`/properties/${img}`}
                    alt="property Image"
                    width='0'
                    height='0'
                    sizes='100vw'
                    className='w-full h-auto rounded-t-xl'
                />
                <div className="p-4">
                    <div className="text-left md:text-center lg:text-left mb-6">
                        <div className="text-gray-600">{type}</div>
                        <h3 className="text-xl font-bold">{name}</h3>
                    </div>
                    {getRatesDisplay()}
                    <div className="flex justify-center gap-4 text-gray-500 mb-4">
                        <p><FaBed /> {beds}
                            <span className="md:hidden lg:inline">Beds</span>
                        </p>
                        <p>
                            <FaBath /> {baths}
                            <span className="md:hidden lg:inline">Baths</span>
                        </p>
                        <p>
                            <FaRulerCombined />
                            {square_feet} <span className="md:hidden lg:inline">sqft</span>
                        </p>
                    </div>

                    <div
                        className="flex justify-center gap-4 text-green-900 text-sm mb-4"
                    >
                        <p><FaMoneyBill /> Weekly</p>
                        <p><FaMoneyBill /> Monthly</p>
                    </div>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                            <i
                                className="fa-solid fa-location-dot text-lg text-orange-700"
                            ></i>
                            <span className="text-orange-700"> {city + " " + state} </span>
                        </div>
                        <Link
                            href="property"
                            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard