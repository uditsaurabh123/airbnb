"use client";
import { useParams } from 'next/navigation';
function PropertiesIdPage() {
    const params = useParams();
    console.log('%capp\properties\[id]\page.tsx:4 object', 'color: #007acc;', params.id);
    return (
        <div>PropertiesIdPage: {params.id}</div>
    )
}

export default PropertiesIdPage