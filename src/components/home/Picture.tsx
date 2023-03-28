import React from 'react'
import Image from 'next/image'
import { me } from '../../../public/images'

export default function Picture() {
  return (
    <div className='relative w-[250px] h-[300px]'>
        <Image src={me} alt="pogi" layout='fill'></Image>
    </div>
  )
}
