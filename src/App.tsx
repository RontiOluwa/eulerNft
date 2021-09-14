/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from './component/Loader';
import Nft from './component/Nft';
import Wallet from './component/Wallet';

function App() {

  const [nft, setNFT] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method:'GET',
      url:'https://api.opensea.io/api/v1/assets'
    }).then((res) => {
      setNFT(res.data.assets)
      console.log(res.data.assets)
      setLoading(false)
    })
  }, [])

  return (
    <div className="NFTList">
      {
        loading ? <Loader /> : (
          <div>
            <Wallet />
            <div className="cards">
              {
                nft.map((item, i) => {
                  if(item.name != null) {
                    console.log(1);
                    return(<Nft key={i} image={item.image_preview_url} name={item.name} openseaLink={item.permalink} />)
                  }
                })
              }   
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
