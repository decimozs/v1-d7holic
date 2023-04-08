import React from 'react';
import { socialLinks } from '@/constants';
import Link from 'next/link';

interface SocialLink {
  title: string;
  link: string;
  hover: string;
}

const Socials: React.FC= () => {
  return (
    <div>
      <ul>
        {socialLinks.map((item: SocialLink, index: number) => (
          <li key={index} className={item.hover}>
            <Link href={item.link} target="_blank">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials