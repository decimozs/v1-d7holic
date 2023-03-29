import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter();

  return (
    <div className='w-full fixed top-0 left-0 p-[2rem] text-[1.2rem]'>
        <div className='flex items-center justify-between'>
            <h1>MARLON MARTIN</h1>
            <h1 className={router.pathname != '/' ? "hidden" : "block"}>2023</h1>
        </div>
    </div>
  )
}
