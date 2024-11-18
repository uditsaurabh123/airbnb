import Link from 'next/link'
import React from 'react'

function Infobox({ title="heading",desc="desc",link="/",linktext="",tileColor="bg-blue-100"}) {
  return (
      <div className={`${tileColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">{desc}
            </p>
            <Link
              href={link}
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              {linktext}
            </Link>
    </div>
  )
}

export default Infobox
