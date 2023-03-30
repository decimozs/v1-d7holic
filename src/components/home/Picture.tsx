import React from 'react'
import Image from 'next/image'
import { m1, me, m2 } from '../../../public/images'

export default function Picture() {
  return (
      <div className='fixed bottom-[4.5rem] right-0 pl-[2rem]'>
        <Image src={m2} alt="pogi"></Image>
      </div>
  )
}
