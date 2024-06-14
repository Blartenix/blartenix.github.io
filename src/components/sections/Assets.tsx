import React from 'react'
import { assetsList } from '../../assets/assetsList'


interface AssetCardProps {
  asset: {
    name: string;
    description: string;
    img: string;
    link: string;
  };
}

function AssetCard({ asset }: AssetCardProps) {
  return (
    <a href={asset.link} target='_blank'>
      <div className='flex border-zinc-400/10 border-[1.5px] backdrop-blur-md bg-slate-800/80
                      rounded-3xl overflow-hidden p-4 space-x-4 hover:bg-slate-700/80
                      hover:scale-[1.03] transition duration-300 ease-in-out group'>
        <img src={asset.img} alt={asset.name} className='h-24 w-24 object-cover rounded-full' />
        <div className='text-left w-[30rem]'>
          <h1 className='font-semibold text-xl'>
            {asset.name}
          </h1>
          <p className='opacity-80'>
            {asset.description}
          </p>
        </div>
      </div>

    </a>
  )
}





export default function Assets() {
  return (
    <div className='flex flex-col space-y-4'>
      {
        assetsList.map((asset) => (
          <AssetCard asset={asset} key={asset.name} />
        ))
      }
    </div>
  )
}
