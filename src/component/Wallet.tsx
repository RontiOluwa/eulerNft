import React, { useState } from 'react';
import Web3 from 'web3';

const { ethereum }: any = window;
const web3 = new Web3(ethereum);

function Wallet() {

const [ address, setAddress ] = useState('');
const [ balance, setBalance ] = useState('');

const connectWallet = async () => {
  await ethereum.request({
    method: 'wallet_requestPermissions',
    params: [
      {
        eth_accounts: {},
      },
    ],
  });
  const [accounts] = await web3.eth.getAccounts();
  setAddress(accounts);
}

const getBalance = async () => {
  const walletBalance = await web3.eth.getBalance(address);
  setBalance(web3.utils.fromWei(walletBalance));
}

if (address !== '') {
  getBalance();
}

  return (
    <>
      {
        address === ''
        ? <button onClick={connectWallet}>Connect Wallet</button>
        : (
          <div className='walletInfo'>
            <p>Address: {address}</p>
            <p>Balance: {balance}</p>
          </div>
        )
      }
      
    </>
  )
}

export default Wallet;