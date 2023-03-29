import { playgroundLinks } from '@/constants'
import React from 'react'
import Link from 'next/link'

export default function Playgrounds() {
  return (
    <div>
       <ul>
            {playgroundLinks.map((item, index) => (
                <li key={index} className={`${item.hover}`}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                </li>
            ))}
       </ul>
    </div>
  )
}
