import React from 'react';
import { motion, Transition, Variants } from 'framer-motion';

export default function Header() {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const transition: Transition = {
    ease: 'linear',
    duration: 1,
    delay: 1,
  };

  return (
    <div className='w-full fixed top-0 left-0 p-[2rem] font-bold'>
      <motion.div
        className='flex items-center justify-between'
        variants={containerVariants}
        initial='initial'
        animate='animate'
        transition={transition}
      >
        <p>MARLON MARTIN</p>
        <p>MANILA PH</p>
      </motion.div>
    </div>
  );
}
