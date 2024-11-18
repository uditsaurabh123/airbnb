import React from 'react'
import connectDB from "@/config/databse"
function Loading() {
    connectDB()
    return (
        <div className='text-center text-rose-400 text-4xl'>
            Loading ...
        </div>
    )
}

export default Loading