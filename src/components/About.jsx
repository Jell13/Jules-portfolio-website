import React from 'react'
import Banner from './Banner'
import sideImage from '../assets/sideImage.jpg'

const About = () => {
  return (
    <div name="about" className=' h-screen p-8 w-full bg-[#f8f8f8]'>
      <div className='max-w-screen-lg w-full h-full flex md:flex-row flex-col justify-center items-center mx-auto px-4'>
        <img className='sm:w-3/5 w-[400px]' src={sideImage} alt="" />
        <div className='p-4 sm:-ml-8 mt-4 ml-0 bg-white'>
          <h1 className='text-2xl md:text-3xl font-bold border-b-2 border-black inline'>About me</h1>
          <p className='text-md md:text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem temporibus odio repudiandae facilis nulla in neque. Ea nam sed explicabo, nostrum quas fuga beatae blanditiis delectus a corporis molestiae sequi.</p>
          <p className='text-md md:text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur facere recusandae repellat reiciendis fugiat alias deserunt ad quas quos.</p>
        </div>
      </div>
    </div>
  )
}

export default About
