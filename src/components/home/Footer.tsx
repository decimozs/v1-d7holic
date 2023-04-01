import { socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full fixed p-[2rem] bottom-0 left-0 uppercase xl:bottom-[8rem]'>
        <div className='flex flex-row items-center justify-between'>
            <ul className='flex flex-row items-center gap-4 xl:flex-col xl:items-start xl:gap-0'>
            {socialLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`} >{item.title}</Link>
                </li>
            ))}
            </ul>
            <p className='hidden font-bold xl:block xl:fixed xl:left-0 xl:p-[2rem] xl: bottom-0'>2023 SPRING</p>
            <p className='hidden sm:block font-bold xl:fixed xl:right-0 xl:p-[2rem] xl: bottom-0'>Portfolio</p>
        </div>
    </div>
  )
}
