import React from 'react';
import Link from 'next/link';
import { playgroundLinks } from '@/constants';

interface PlaygroundLink {
  title: string;
  link: string;
  hover: string;
}

const Playgrounds: React.FC = () => {
  return (
    <div>
      <ul>
        {playgroundLinks.map(({ title, link, hover }: PlaygroundLink, index) => (
          <li key={index} className={hover}>
            <Link href={link} target="_blank">{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playgrounds;
