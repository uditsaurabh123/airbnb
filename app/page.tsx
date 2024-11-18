"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Hero from "@/components/Hero"
import Infobox from "@/components/Infobox"
import InfoBoxContainer from "@/components/InfoBoxContainer";
import RecentProperties from "@/components/RecentProperties";

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    console.log('%capp\page.tsx:7 router object ', 'color: #C1DA25FF;', router);
    console.log('%capp\page.tsx:9 searchParams object ', 'color: #D4C00AFF;', searchParams.get('name'));
    console.log('%capp\page.tsx:11 pathname', 'color: #EA910CFF;', pathname);
    console.log('%ccomponents\Navbar.tsx:14 this is process name', 'color: #007acc;', process.env.URI);


    return (
        <>
            <Hero />
            <InfoBoxContainer>
                <Infobox title="For Property Owners"
                    desc="List your properties and reach potential tenants. Rent as an
              airbnb or long term."
                    link="/properties/add"
                    linktext="Add Property"
                />
                <Infobox title="For Renters"
                    desc="Find your dream rental property. Bookmark properties and contact
              owners."
                    link="/properties"
                    linktext='Browse Properties'
                    tileColor="bg-purple-100"
                />
            </InfoBoxContainer>
            <RecentProperties />
        </>
    );
}
