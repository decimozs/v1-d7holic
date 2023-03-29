import Copyrights from '@/components/shared/Copyrights'
import Playgrounds from '@/components/shared/Playgrounds'
import Socials from '@/components/shared/Socials'
import React from 'react'

export default function contact() {
  return (
    <div className='fixed bottom-[6rem] right-0 p-[2rem] uppercase sm:top-[20rem] sm:right-[35rem]'>
      <div className='flex flex-col gap-6'>
        <div>
          <p  className='mb-2 font-bold'>Socials</p>
          <Socials />
        </div>
        <div>
          <p  className='mb-2 font-bold'>Playgrounds</p>
          <Playgrounds />
        </div>
      </div>
      <Copyrights />
    </div>
  )
}
