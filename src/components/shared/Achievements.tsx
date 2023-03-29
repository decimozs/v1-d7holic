import { achievementsLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function Achievements() {
  return (
    <div>
        <ul>
            {achievementsLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`} >{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
