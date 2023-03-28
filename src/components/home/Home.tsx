import React from 'react'
import Image from 'next/image' 
import Nav from './Nav'
import Picture from './Picture'

export default function Home() {
  return (
    <section className='w-full h-full flex items-center justify-center flex-col p-[2rem]'>
      <Nav />
    </section>
  )
}
