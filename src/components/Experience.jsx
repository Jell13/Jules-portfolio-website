import React from 'react'
import home from '../assets/home.jpg'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import Jules from '../assets/Jules.jpg'
import Carousel from './Carousel'

const Experience = () => {

  const slides = [
    {
      title:'Title 1',
      image:'bg-home',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, recusandae natus! Tenetur quasi neque impedit cumque, aperiam voluptas deleniti. Velit, cum quas! Dolorum quisquam sunt minus vero expedita reprehenderit unde.'
    },
    {
      title:'Title 2',
      image:'bg-banner1',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, recusandae natus! Tenetur quasi neque impedit cumque, aperiam voluptas deleniti. Velit, cum quas! Dolorum quisquam sunt minus vero expedita'
    },
    {
      title:'Title 3',
      image:'bg-banner2',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, recusandae natus! Tenetur quasi neque impedit cumque, aperiam voluptas deleniti. Velit, cum quas! Dolorum quisquam sunt minus vero expedita'
    },
  ]

  return (
    <div name="experience" className='w-full bg-[#f8f8f8] p-2'>
      <div className=' max-w-screen-lg w-full h-full flex flex-col justify-center items-center mx-auto p-2'>
          <div className='pb-10 mt-20'>
            <h1 className='text-2xl font-bold border-b-2 border-black inline'>Experience</h1>
          </div>
          
          <Carousel slides={slides}/>
      </div>
    </div>
  )
}

export default Experience
