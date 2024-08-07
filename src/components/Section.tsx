import React from 'react';

interface SectionContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function Section({ title, children }: SectionContainerProps) {
  return (
    <div className='flex flex-col justify-center items-center text-center space-y-14'>
      <div className='border-b-3 text-white text-5xl font-semibold w-10'>
        <div className='flex items-center justify-center h-full border-b-[6px] border-transparent whitespace-nowrap'>
          {title}
        </div>
      </div>
      <div className='h-min-20'>
        {children}
      </div>
    </div>
  );
}