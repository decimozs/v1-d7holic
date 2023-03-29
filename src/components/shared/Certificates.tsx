import { certificationLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function Certificates() {
  return (
    <div>
        <ul>
            {certificationLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`} >{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
