import React from 'react';
import { gamesList } from '../../assets/gamesList';

interface GameCardProps {
  game: {
    name: string;
    description: string;
    category: string;
    photo: string;
    link: string;
  };
}

function GameCard({ game }: GameCardProps) {

  const background =
    <img src={game.photo} alt={game.name} className='h-full w-full object-cover' />

  const tileLayer =
    <div className="tile-layer">
      <h2>{game.name}</h2>
    </div>

  const detailsLayer =
    <div className="details-layer opacity-0">
      <p>{game.description}</p>
      <p>{game.category}</p>
    </div>

  return (
    <a href={game.link} target="_blank">
      <div className='relative w-80 h-64 rounded-lg overflow-hidden group flex
                      items-center justify-center cursor-pointer
                      hover:scale-[1.03] transition duration-300 ease-in-out'>
        <div className='absolute inset-0 z-0'>
          {background}
        </div>
        <div className='absolute inset-0 z-10 flex items-center justify-center opacity-0'>
          {tileLayer}
        </div>
        <div className='absolute inset-0 z-20 flex items-center justify-center'>
          {detailsLayer}
        </div>
      </div>
    </a>
  );
}


export default function Games() {
  return (
    <div className='flex flex-row space-x-4'>
      {gamesList.map((game) => (
        <GameCard game={game} key={game.name} />
      ))}
    </div>
  );
}
