import { ethers } from 'ethers';
import React from 'react'

const Buy = ({state}) => {

  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract)
    const amount ={ value:ethers.utils.parseEther("0.01")}
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction Successful")
  }


  return (
    <>
    <form onSubmit={buyChai}></form>
    <label>Name</label>
    <input type="text" id="name" placeholder='Enter Your Name'></input>
    <label>Message</label>
    <input type="text" id="message" placeholder='Enter Your Message'></input> 
   <button type='submit'> Pay </button>
    </>
  )
}

export default Buy