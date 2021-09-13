import React from 'react';

export interface NftProps {
    image: string;
    name: string;
    openseaLink: string
}

function Nft({image, name, openseaLink}: NftProps) {
    return (
        <div className="card">
            <a href={openseaLink}>
                <img src={image} alt=''/>
                <h3>{name}</h3>
            </a>
        </div>
    );
  }
  
  export default Nft;
  