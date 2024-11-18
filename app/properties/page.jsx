import properties from "@/data/property.json"
import PropertyCard from "@/components/PropertyCard";

const images = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "b1.jpg", "b2.jpg", "b3.jpg", "c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "d1.jpg", "d2.jpg", "d3.jpg", "e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg", "f1.jpg", "f2.jpg", "f3.jpg", "g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "e1.jpg", "e2.jpg", "h1.jpg", "h2.jpg", "h3.jpg", "i1.jpg", "i2.jpg", "j1.jpg", "j2.jpg", "j3.jpg",]
const PropertiesPage = () => {
    return (<section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
            {properties.length == 0 ? (<div>No properties found...</div>) : (
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            properties.map(({
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
                            </div>))
                        }
                    </div>
                </div>
            )}
        </div>
    </section >);
}
 
export default PropertiesPage;

