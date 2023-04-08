import React from 'react';
import dynamic from 'next/dynamic';

const DynamicPicture = dynamic(() => import('./Picture'))
const DynamicFooter = dynamic(() => import('./Footer'))

export default function Home() {
  return (
    <section className='w-full h-full flex items-center justify-center flex-col p-[2rem]'>
      <DynamicPicture />
      <DynamicFooter key="footer" />
    </section>
  );
}
