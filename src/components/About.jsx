import React from 'react'
import Banner from './Banner'

const About = () => {
  return (
    <div name="about" className=' h-screen p-8 w-full bg-[#f8f8f8]'>
      <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto px-4'>
        <div className='pb-6'>
            <h1 className='text-2xl md:text-3xl font-bold border-b-2 border-black inline'>About me</h1>
        </div>
        <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem temporibus odio repudiandae facilis nulla in neque. Ea nam sed explicabo, nostrum quas fuga beatae blanditiis delectus a corporis molestiae sequi.</p>
        <br />
        <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur facere recusandae repellat reiciendis fugiat alias deserunt ad quas quos. Fugiat excepturi quibusdam voluptates deserunt veritatis provident suscipit quam dolorum?</p>
        <br />
        <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur facere recusandae repellat reiciendis fugiat alias deserunt ad quas quos. Fugiat excepturi quibusdam voluptates deserunt veritatis provident suscipit quam dolorum?</p>
      </div>
    </div>
  )
}

export default About
