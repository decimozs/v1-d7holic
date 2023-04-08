import { NextPage } from 'next';
import React from 'react'
import dynamic from 'next/dynamic';

const DynamicContactContext = dynamic(() => import('@/components/shared/ContactContext'))

const contact : NextPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <DynamicContactContext />
    </div>
  )
}

export default contact;