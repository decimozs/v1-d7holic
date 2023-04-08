import ContactContext from '@/components/shared/ContactContext'
import { NextPage } from 'next';
import React from 'react'

const contact : NextPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <ContactContext />
    </div>
  )
}

export default contact;