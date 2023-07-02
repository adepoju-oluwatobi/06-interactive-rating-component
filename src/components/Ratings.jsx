import React from 'react'
import { useState } from 'react';
import Star from '../assets/icon-star.svg'
import IllustrationIcon from '../assets/illustration-thank-you.svg'

function Ratings() {
  {/** State to collect star input */}
  const [star, setStar] = useState();
  {/** state to store the star and render it as a rating */}
  let [rating, setRating] = useState("");

  let ratePage = document.getElementById('rate');
  let successPage = document.getElementById('success-page')
  let oneStarBtn = document.getElementById('one-star');
  let twoStarBtn = document.getElementById('two-star');
  let threeStarBtn = document.getElementById('three-star');
  let fourStarBtn = document.getElementById('four-star');
  let fiveStarBtn = document.getElementById('five-star');

  let oneStar = () => {
    setStar(1);
    oneStarBtn = document.getElementById('one-star').style.background = "black";
    twoStarBtn = document.getElementById('two-star').style.background = "";
    threeStarBtn = document.getElementById('three-star').style.background = "";
    fourStarBtn = document.getElementById('four-star').style.background = "";
    fiveStarBtn = document.getElementById('five-star').style.background = "";
    console.log(star);
  }

  let twoStar = () => {
    setStar(2);
    oneStarBtn = document.getElementById('one-star').style.background = "";
    twoStarBtn = document.getElementById('two-star').style.background = "black";
    threeStarBtn = document.getElementById('three-star').style.background = "";
    fourStarBtn = document.getElementById('four-star').style.background = "";
    fiveStarBtn = document.getElementById('five-star').style.background = "";
    console.log(star);
  }

  let threeStar = () => {
    setStar(3);
    oneStarBtn = document.getElementById('one-star').style.background = "";
    twoStarBtn = document.getElementById('two-star').style.background = "";
    threeStarBtn = document.getElementById('three-star').style.background = "black";
    fourStarBtn = document.getElementById('four-star').style.background = "";
    fiveStarBtn = document.getElementById('five-star').style.background = "";
    console.log(star);
  }

  let fourStar = () => {
    setStar(4);
    oneStarBtn = document.getElementById('one-star').style.background = "";
    twoStarBtn = document.getElementById('two-star').style.background = "";
    threeStarBtn = document.getElementById('three-star').style.background = "";
    fourStarBtn = document.getElementById('four-star').style.background = "black";
    fiveStarBtn = document.getElementById('five-star').style.background = "";
    console.log(star);
  }

   let fiveStar = () => {
    setStar(5);
    oneStarBtn = document.getElementById('one-star').style.background = "";
    twoStarBtn = document.getElementById('two-star').style.background = "";
    threeStarBtn = document.getElementById('three-star').style.background = "";
    fourStarBtn = document.getElementById('four-star').style.background = "";
    fiveStarBtn = document.getElementById('five-star').style.background = "black";
    console.log(star);
  }

  const submit = () => {
    setRating(star)
    ratePage = document.getElementById('rate').style.display = "none";
    successPage = document.getElementById('success-page').style.display = "block";
    console.log(rating);
  }
  return (
    <div>
      <div className='w-[320px] h-[320px] bg-[#252d37] rounded-2xl p-6' id='rate'>
      <div className='bg-[#191f26] rounded-full w-fit p-4 flex justify-center items-center'>
        <img src={Star} alt="" />
      </div>
      <div className='py-3'>
        <p className='text-white text-xl font-bold pb-2'>
          How did we do?{rating}
        </p>
        <p className='text-white opacity-50 text-sm w-[32ch]'>
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering.
        </p>
      </div>
      <div className='flex justify-evenly gap-2 items-center'>
        <div className='bg-[#191f26] rounded-full w-8 h-8 p-6 flex justify-center items-center cursor-pointer hover:bg-[#fb7413] after:bg-black hover:text-white' id='one-star' onClick={oneStar}>
          <p className='text-white opacity-50'>1</p>
        </div>

        <div className='bg-[#191f26] rounded-full w-8 h-8 p-6 flex justify-center items-center cursor-pointer hover:bg-[#fb7413] hover:text-white' id='two-star' onClick={twoStar}>
          <p className='text-white opacity-50'>2</p>
        </div>

        <div className='bg-[#191f26] rounded-full w-8 h-8 p-6 flex justify-center items-center cursor-pointer hover:bg-[#fb7413] hover:text-white' id='three-star' onClick={threeStar}>
          <p className='text-white opacity-50'>3</p>
        </div>

        <div className='bg-[#191f26] rounded-full w-8 h-8 p-6 flex justify-center items-center cursor-pointer hover:bg-[#fb7413] hover:text-white' id='four-star' onClick={fourStar}>
          <p className='text-white opacity-50'>4</p>
        </div>

        <div className='bg-[#191f26] rounded-full w-8 h-8 p-6 flex justify-center items-center cursor-pointer hover:bg-[#fb7413] active:bg-slate-500 hover:text-white' id='five-star' onClick={fiveStar}>
          <p className='text-white opacity-50'>5</p>
        </div>
        
      </div>
      <div className='bg-[#fb7413] w-[100%] p-2 rounded-full text-center text-white mt-4 cursor-pointer active:bg-white active:text-black hover:bg-white hover:text-black' onClick={submit}>
        <p>Submit</p>
      </div>
    </div>

    <div className='w-[320px] h-[320px] bg-[#252d37] rounded-2xl p-6 hidden' id='success-page'>
      <div className='flex justify-center'>
        <img src={IllustrationIcon} alt="" />
      </div>
      <div className='text-center bg-[#3e4957] rounded-full p-1 text-[#fb7413] mt-6 w-[60%] m-auto'>
        <p className='opacity-80 text-sm'>You selected {rating} out of 5</p>
      </div>
      <div className='text-center mt-4'>
        <p className='text-white text-2xl font-bold'>Thank You!</p>
      </div>
      <div className='mt-4'>
        <p className='text-white text-xs text-center opacity-80'>
          We appreciate you taking your time to give a rating. 
          If you ever need more support don't hesitate to get in touch!
        </p>
      </div>
    </div>
    </div>
  )
}

export default Ratings