"use client"

import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Hero from "@/components/Hero"

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    console.log('%capp\page.tsx:7 router object ', 'color: #C1DA25FF;', router);
    console.log('%capp\page.tsx:9 searchParams object ', 'color: #D4C00AFF;', searchParams.get('name'));
    console.log('%capp\page.tsx:11 pathname', 'color: #EA910CFF;', pathname);
    return (
        <>
            <h1 className="text-3xl inset-y-36 border border-pink-400 m-2">Home</h1>
            <Hero />
            <Link className="text-lime-600 underline p-4 border border-orange-300 m-2" href="/properties/1">Go to properties</Link >
            <button className="text-ellipsis text-orange-600 underline p-4 border border-lime-300 m-2" onClick={() => router.push("/properties/add")}>Go properties/add page.</button>
            <button className="text-ellipsis text-purple-500-600 underline p-4 border border-lime-300 m-2" onClick={() => router.replace("/properties")}>Properties</button>
        </>
    );
}
