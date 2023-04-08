import { socialLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SocialLink {
  title: string;
  link: string;
  hover: string;
}

export default function Footer() {
  const ulVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const divVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const ulTransition = {
    ease: "linear",
    duration: 1,
    delay: 1,
  };

  const divTransition = {
    ease: "linear",
    duration: 1,
    delay: 1,
  };

  return (
    <div className='w-full fixed p-[2rem] bottom-0 left-0 uppercase xl:bottom-[8rem]'>
      <div className='flex flex-row items-center justify-between'>
        <motion.ul
          className='flex flex-row items-center gap-4 xl:flex-col xl:items-start xl:gap-0'
          variants={ulVariants}
          initial="initial"
          animate="animate"
          transition={ulTransition}
        >
          {socialLinks.map((item: SocialLink, index: number) => (
            <li key={index} className={`${item.hover}`}>
              <Link href={`${item.link}`}>{item.title}</Link>
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={divVariants}
          initial="initial"
          animate="animate"
          transition={divTransition}
        >
          <p className='hidden font-bold xl:block xl:fixed xl:left-0 xl:p-[2rem] xl:bottom-0'>
            2023 SPRING
          </p>
          <p className='hidden sm:block font-bold xl:fixed xl:right-0 xl:p-[2rem] xl:bottom-0'>
            Portfolio
          </p>
        </motion.div>
      </div>
    </div>
  );
}
