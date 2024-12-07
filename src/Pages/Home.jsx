import React from 'react'
import poster from "../assets/poster.avif"

const Home = () => {
  return (
    <>
    <div className='flex justify-between px-20 py-10'>


      <div className='flex flex-col gap-10 w-96 py-10'>
         <div className='mt-auto '>
         <h1 className='text-7xl text-primary-default'>Do What's Best For Your Brand.</h1>
         </div>
          <div>
          <button className='w-full rounded-md text-xl py-3 text-primary-default border border-primary-dark hover:text-white hover:bg-primary-dark duration-300 cursor-pointer'>BOOK A MEETING</button>
          </div>
      </div>

      <div>
        <img src={poster} alt="PosterImg"  />
      </div>


    </div>

    </>
  )
}

export default Home