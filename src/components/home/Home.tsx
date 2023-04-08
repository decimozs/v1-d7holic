import React from 'react';
import Footer from './Footer';
import Picture from './Picture';

export default function Home() {
  return (
    <section className='w-full h-full flex items-center justify-center flex-col p-[2rem]'>
      <Picture />
      <Footer key="footer" />
    </section>
  );
}
