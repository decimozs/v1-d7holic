import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className='w-full fixed top-0 left-0 p-[2rem] font-bold'>
        <motion.div className='flex items-center justify-between'
        initial={{ opacity : 0 }}
        animate={{ opacity : 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          delay: 1,
        }}>
            <p>MARLON MARTIN</p>
            <p>MANILA PH</p>
        </motion.div>
    </div>
  )
}
