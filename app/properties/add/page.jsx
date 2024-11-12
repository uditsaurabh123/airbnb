'use client'
import { usePathname } from "next/navigation";

const AddPage = () => {
    const searchPathname = usePathname()
    console.log('%capp\page.tsx:7 searchPathname object ', 'color: #C1DA25FF;', searchPathname);
    return (<div className="text-3xl font-bold underline border border-orange-300">Add Page JSX</div>);
}

export default AddPage