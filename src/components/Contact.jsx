import React from 'react'
import side from '../assets/side.jpg'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen p-4 mt-11'>
      <div className='max-w-screen-lg mx-auto w-full h-full flex flex-col justify-center p-4'>
        <div className='mb-10'>
          <h1 className='font-bold md:text-4xl text-2xl border-b-2 border-black inline'>Contact</h1>
          <p className='mt-8'>Submit the form to get in touch with me</p>
        </div>
        <div className='flex flex-row-reverse justify-center items-center gap-5'>
          <form action="https://getform.io/f/29289df3-f47c-4120-98af-4b7d772ad78d" method='POST' className='flex flex-col md:w-1/2 w-full'>
              <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
              <input type="email" name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none' />
              <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>

              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
              flex items-center rounded-md hover:scale110 duration-300'>Send</button>
          </form>
          <img className='md:h-[500px] md:block hidden md:w-1/2' src={side} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact
