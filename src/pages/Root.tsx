
import React from 'react'
import Link from 'next/link';



const Root = () => {
  return (
    <div>
      <Link legacyBehavior href="/Form" ><a>Form</a></Link>
      <div></div>
      <Link legacyBehavior href="/edit/[id]" as='/edit/123' ><a>id</a></Link>
      <div></div>
      <Link legacyBehavior href="/Search" ><a>Search</a></Link>
    </div>
  )
}

export default Root
