import React from 'react';
import { NextPage } from 'next';
import Achievements from '@/components/shared/Achievements';
import Certificates from '@/components/shared/Certificates';
import Playgrounds from '@/components/shared/Playgrounds';
import Socials from '@/components/shared/Socials';

const About: NextPage = () => {
  return (
    <div className="fixed bottom-0 left-0 p-[2rem] uppercase sm:top-[9%] sm:left-[35%] lg:left-[50%]">
      <div className="flex flex-col gap-[2rem] sm:flex-row">
        <div className="w-full max-w-[300px]">
          <p>
            Marlon Martin is an information technology student based in Manila,
            Philippines. Currently into{' '}
            <span className="font-bold">Competitive programming</span> and{' '}
            <span className="font-bold">Software Engineering</span>.
          </p>
        </div>
        <div className="flex flex-row gap-[3rem] sm:flex-col">
          <div>
            <div>
              <p className="mb-2 font-bold">Achievements</p>
              <Achievements />
            </div>
            <div className="mt-[2rem]">
              <p className="mb-2 font-bold">Certifications</p>
              <Certificates />
            </div>
          </div>
          <div>
            <div className="mb-[2rem]">
              <p className="mb-2 font-bold">Networks</p>
              <Socials />
            </div>
            <div>
              <p className="mb-2 font-bold">Playgrounds</p>
              <Playgrounds />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
