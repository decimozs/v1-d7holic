import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Picture from './Picture'

export default function Home() {
  return (
    <section className='w-full h-full flex items-center justify-center flex-col p-[2rem]'>
      <Header />
      <Nav />
      <Picture />
      <Footer />
    </section>
  )
}
