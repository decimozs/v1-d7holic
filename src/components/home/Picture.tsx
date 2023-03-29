import React from 'react'
import Image from 'next/image'
import { m1, me } from '../../../public/images'

export default function Picture() {
  return (
      <div className='fixed bottom-[4.5rem] right-0 pl-[2rem]'>
        <Image src={m1} alt="pogi"></Image>
      </div>
  )
}
