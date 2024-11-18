import properties from "@/data/property.json"
import PropertyCard from "@/components/PropertyCard";
import InfoBigBoxHeader from "@/components/InfoBigBoxHeader";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation'
const images = ["a1.jpg", "a2.jpg", "a3.jpg",]


function RecentProperties() {
    const router = useRouter()
    const properties_new = properties.slice(0, 3)
    const featuredProperties = properties.slice(3, 6)
    return (
        <>
            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto px-4 py-6">
                    {properties.length == 0 ? (<div>No properties found...</div>) : (
                        <>
                            <div className="my-10 p-10 bg-purple-50 rounded-md">
                                <InfoBigBoxHeader header="Recent Properties" />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {
                                        properties_new.map(({
                                            _id, name, type, beds, baths, square_feet, location, rates
                                        }, index) => (<div key={_id}>
                                            <PropertyCard
                                                name={name}
                                                type={type}
                                                beds={beds}
                                                baths={baths}
                                                square_feet={square_feet}
                                                location={location}
                                                rates={rates}
                                                img={images[index]}
                                            />
                                        </div>))}
                                </div>
                            </div>
                            <div className="my-10 p-10 bg-orange-50 rounded-md">
                                <InfoBigBoxHeader header="Featured Properties" />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {
                                        featuredProperties.map(({
                                            _id, name, type, beds, baths, square_feet, location, rates
                                        }, index) => (<div key={_id}>
                                            <PropertyCard
                                                name={name}
                                                type={type}
                                                beds={beds}
                                                baths={baths}
                                                square_feet={square_feet}
                                                location={location}
                                                rates={rates}
                                                img={images[index]}
                                            />
                                        </div>))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section >

            <section className="m-auto max-w-lg flex justify-center align-middle my-5 py-10 text-4xl">
                <Button className="bg-red-800 p-10 text-2xl"
                    onClick={() => router.push("/properties")}
                >View All Properties</Button>
            </section>
        </>
    )
}

export default RecentProperties
