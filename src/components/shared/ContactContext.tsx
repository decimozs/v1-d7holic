import React from 'react';
import Link from 'next/link';
import { contactLinks } from '@/constants';

interface ContactLink {
  title: string;
  link: string;
  hover: string;
}

const ContactContext: React.FC = () => {
  return (
    <div className='p-[2rem] flex flex-col uppercase'>
      <div className='w-full max-w-[300px] mb-[1rem] font-bold'>
        <p>
          Open to another opportunity to gain knowledge and share my expertise in tech-related fields.
        </p>
      </div>
      <ul>
        {contactLinks.map((item: ContactLink, index: number) => (
          <li key={index}>
            <Link href={item.link} className={item.hover}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className='fixed bottom-0 right-0 p-[2rem] text-[0.7rem]'>
        decimodev © 2023 ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default ContactContext;
