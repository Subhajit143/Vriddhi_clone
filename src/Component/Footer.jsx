import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='p-20'>
   <div className='flex justify-between top-0 px-40 py-20 bg-primary-default text-white'>

<div className='flex flex-col gap-14'>
  <div className='text-2xl font-semibold'>
      <h1>Let's Work Together</h1>
  </div>

  <div>
      <h2>Phone</h2>
      <h2>+91 9266537839</h2>
      <h2>info@vriddhi.media</h2>
  </div>
</div>

<div className='flex flex-col gap-12'>
    <div  className='text-2xl font-semibold'>
        <h1>Get in the Know</h1>
    </div>

    <div className='flex flex-col gap-5'>
        <div >
          <p>
          Enter Your Email *
          </p>
          <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />
        </div>
        <div>
        <button className='  text-lg px-4  py-3 text-white border border-pink-300 hover:text-white hover:bg-pink-300 duration-300 cursor-pointer'>SUBSCRIBE</button>
        </div>
    </div>
</div >

<div className='flex flex-col gap-12'>
    <div  className='text-2xl font-semibold'>
        <h1>
          Stay in Touch
        </h1>
    </div>

    <div className='flex flex-col gap-8'>
        <div>
            <p>First Name</p>
            <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />


           
            <p>Last Name</p>
            <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />
      
            <p>Email *</p>
            <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />
      
            <p>Subject</p>
            <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />


            <p>Leave us a message...</p>
            <input type="text" className='bg-primary-default border-b border-white focus:outline-none focus:border-white' />
      
        
        </div>

        <div>
        <button className='  text-lg px-4  py-3 text-white border border-pink-300 hover:text-white hover:bg-pink-300 duration-300 cursor-pointer'>SUBSCRIBE</button>
        </div>
    </div>
</div>

</div>

<div className='py-5'>
  <h1>
  © 2035 by George Lambert. Powered and secured by Wix
  </h1>
</div>
   </div>
   </>
  )
}

export default Footer