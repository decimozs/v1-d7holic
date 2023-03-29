import React from 'react'
import Picture from './Picture'
import Link from 'next/link'
import { navLinks } from '@/constants'

export default function Nav() {
  return (
    <nav className='fixed top-[5rem] left-0 p-[2rem]'>
      <ul className=''>
        {navLinks.map((item, index) => (
          <li key={index} className="uppercase hover:text-black">
            <Link href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
