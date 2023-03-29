import { socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full fixed p-[2rem] bottom-0 left-0 uppercase'>
        <div className='flex flex-row items-center justify-between'>
            <ul className='flex flex-row items-center gap-4'>
            {socialLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`} >{item.title}</Link>
                </li>
            ))}
            </ul>
            <p className='hidden sm:block'>Portfolio</p>
        </div>
    </div>
  )
}
