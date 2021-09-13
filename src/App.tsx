/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from './component/Loader';
import Nft from './component/Nft';

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
      <div className="cards">
        {
          loading &&
          <Loader />
        }
        {
          !loading &&
          <>
          {
            nft.map(item => {
              if(item.name != null) {
                console.log(1);
                return(<Nft image={item.image_preview_url} name={item.name} openseaLink={item.permalink} />)
              }
            })
          }
          </>
        }
      </div>
    </div>
  );
}

export default App;
