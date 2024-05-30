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

function AssetCard({asset}: AssetCardProps) {
  return (
    <a href={asset.link} target='_blank'>
      <img src={asset.img} alt={asset.name} className='h-24 w-24 object-cover' />
      {asset.name}
    </a>
  )
}





export default function Assets() {
  return (
    <div className='flex flex-column'>
      {
        assetsList.map((asset) => (
          <AssetCard asset={asset} key={asset.name} />
        ))
      }
    </div>
  )
}
