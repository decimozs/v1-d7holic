import React from 'react'
import Link from 'next/link'

export default function ContactContext() {
  return (
    <div className='p-[2rem] flex flex-col font-bold uppercase'>
      <Link href="/">Email</Link>
      <p className='fixed bottom-0 right-0 p-[2rem]'>Design and Develop by Marlon Martin</p>
      <Link href='/' className='text-right'>Contact Form</Link>
    </div>
  )
}
