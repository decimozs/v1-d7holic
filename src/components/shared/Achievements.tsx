import { achievementsLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Achievements: React.FC = () => {
  return (
    <div>
      <ul>
        {achievementsLinks.map(({ title, link, hover }, index) => (
          <li key={index} className={hover}>
            <Link href={link} target="_blank">{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
