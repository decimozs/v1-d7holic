import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { navLinks } from '@/constants'

export default function Nav() {
  const router = useRouter();

  return (
    <nav className='fixed top-[4.5rem] left-0 p-[2rem]'>
      <ul className=''>
        {navLinks.map((item, index) => (
          <li key={index} className={router.pathname == item.link ? "text-black uppercase transition-all font-bold " : "uppercase hover:text-black transition-all text-gray-600"}>
            <Link href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
