import React from 'react';
import { Gamepad, Puzzle, Contact } from 'lucide-react';

interface ItemProps {
  word?: string;
  icon: React.ElementType;
}

function Item({ word, icon: Icon }: ItemProps) {
  return (
    <li className="flex items-center justify-center">
      <button className='py-2 px-5 rounded-full flex items-center
            text-2xl font-semibold text-white select-none
            hover:border-slate-500 transition-all duration-300 hover:bg-slate-500 hover:bg-opacity-50'>
            <Icon size={24} className='mr-2'/>
        {word || 'missing'}
      </button>
    </li>
  );
}

export default function NavBar() {
  return (
    <>
      <div className='flex items-center bg-transparent px-48 py-3 justify-center z-50'>
        <ul className='flex items-center space-x-5 justify-center backdrop-blur-md bg-slate-800/80 rounded-full p-2
                       border-zinc-400/10 border-[1.5px]'>
          <Item word="Games" icon={Gamepad} />
          <Item word="Assets" icon={Puzzle}/>
          <Item word="Contact" icon={Contact}/>
        </ul>
      </div>
    </>
  );
}