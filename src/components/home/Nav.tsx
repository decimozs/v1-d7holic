import React from 'react'
import Picture from './Picture'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>

        <Link href='/'>
          <p  className='left font-light text-[2rem]'>About</p>
        </Link>

        <Picture/>

        <Link href='/'>
          <p  className='text-right font-light text-[2rem]'>Contact</p>
        </Link>

    </div>
  )
}
