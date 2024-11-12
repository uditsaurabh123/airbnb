"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();
    console.log('%capp\page.tsx:7 router object ', 'color: #C1DA25FF;', router);
    return (
        <>
            <div className="text-3xl font-bold underline border border-orange-300 m-2">This is main page.</div>
            <h1 className="text-3xl inset-y-36 border border-pink-400 m-2">Home</h1>
            <Link className="text-lime-600 underline p-4 border border-orange-300 m-2" href="/properties/1">Go to properties</Link >
            <button className="text-ellipsis text-orange-600 underline p-4 border border-lime-300 m-2" onClick={() => router.push("/properties/add")}>Go properties/add page.</button>
        </>
    );
}
