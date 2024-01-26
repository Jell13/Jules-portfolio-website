import React from 'react'
import pic from '../assets/Jules.jpg'
import Navbar from './Navbar'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const Home = () => {

  const links = [
    {
      id:1,
      child: (<><FaLinkedin size={30}/></>),
      href: 'https://www.linkedin.com/in/julia-sutedjo/',
      style: 'rounded-br-md',
    },
    {
      id:2,
      child: (<><BsFillPersonLinesFill size={30}/></>),
      href:'/',
      style: 'rounded-br-md',
      download: true
    }
  ]

  return (
    <div name="home" className='w-full h-screen bg-home bg-cover bg-fixed bg-center bg-no-repeat text-gray-100'>
      <div className='w-full h-full flex flex-col'>
        {/* <Navbar/> */}
        <div className='max-w-screen-lg mt-10 w-full mx-auto h-full flex flex-col md:flex-row-reverse justify-center items-center'>
          <div className=' flex flex-col gap-4 justify-center h-1/2'>
            <h1 className='text-4xl md:text-7xl font-bold'>Biomedical Engineering</h1>
            <p className='max-w-md mt-4 text-3xl'>Julia Sutedjo</p>
            <div className='flex md:gap-20 gap-5 items-center'>
              {links.map(({id, child, href, style, download}) => (
                <li className='flex flex-col-reverse' key={id}><a href={href} download={download}>{child}</a></li>
              ))}
            </div>
          </div>
          <div>
            <img className='rounded-2xl mx-auto md:w-3/5 mb-[30px] w-[200px]' src={pic} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
