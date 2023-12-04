
import Link from 'next/link'
import React from 'react'



export default function Button({ children, to, className }) {


  return (
    <>
      <Link href={to}  role='button' className={className}>
      {children}
       
      </Link>
    </>
  )
}
