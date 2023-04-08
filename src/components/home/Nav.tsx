import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { navLinks } from '@/constants';

interface NavLink {
  link: string;
  title: string;
}

const Nav: React.FC = () => {
  const router = useRouter();

  return (
    <nav className='fixed top-[5rem] left-0 p-[2rem] lg:top-[4rem] 2xl:top-[5rem]'>
      <ul className=''>
        {navLinks.map((item: NavLink, index: number) => (
          <li
            key={index}
            className={
              router.pathname === item.link
                ? 'text-black uppercase transition-all font-bold'
                : 'uppercase hover:text-black transition-all text-gray-600'
            }
          >
            <Link href={item.link} legacyBehavior>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
