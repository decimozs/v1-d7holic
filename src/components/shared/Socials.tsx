import React from 'react'
import { socialLinks } from '@/constants'
import Link from 'next/link'

export default function Socials() {
  return (
    <div>
        <ul>
            {socialLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`} >{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
