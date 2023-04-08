import { certificationLinks } from '@/constants';
import Link from 'next/link';
import React, { FC } from 'react';

const Certificates: React.FC = () => {
  return (
    <div>
      <ul>
        {certificationLinks.map(({ title, link, hover }, index) => (
          <li key={index} className={hover}>
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Certificates
