import React from 'react';
import { BoxSelect } from 'lucide-react';

interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return (
    <li className="flex items-center justify-center">
      <button className='py-2 px-5 rounded-full flex items-center
            text-2xl font-semibold text-white select-none
            hover:border-slate-500 transition-all duration-300 hover:bg-slate-500 hover:bg-opacity-50'>
        <BoxSelect size={24} className='mr-2'/>
        {word || 'missing'}
      </button>
    </li>
  );
}

export default function NavBar() {
  return (
    <>
      <div className='flex items-center bg-transparent px-48 py-3 justify-center'>
        <ul className='flex items-center space-x-5 justify-center backdrop-blur-md bg-slate-800/80 rounded-full p-2
                       border-zinc-400/30 border-[1px]'>
          <Item word="Games" />
          <Item word="Assets" />
          <Item word="Contact" />
        </ul>
      </div>
    </>
  );
}