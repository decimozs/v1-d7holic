import React, { ReactNode } from 'react'
import Meta from '@/meta/Meta'
import { FunctionComponent } from 'react'
import {Archivo} from 'next/font/google'
import Header from '../home/Header'
import Nav from '../home/Nav'

const font = Archivo({
  subsets : ['latin']
})

const Layout : FunctionComponent <LayoutProps> = ({children}) => {
  return (
    <main className = "bg-[white] fixed top-0 left-0 h-full w-full max-w-[1980px] text-black tracking-[-1px] text-[1rem]" id={font.className}>
        <Header />
        <Nav />
        <Meta/>
        {children}
    </main>
  )
}

export default Layout

interface LayoutProps {
    children : ReactNode
}

