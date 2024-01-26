import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

    const[nav, setNav] = useState(false)

    const links = [
        {
            id: '1',
            name: 'home'
        },
        {
            id: '2',
            name: 'about',
        },
        {
            id: '3',
            name: 'honors & awards'
        },
        {
            id: '4',
            name: 'experience',
        },
        {
          id: '5',
          name: 'contact',
      },
    ]
  return (
    <div className='w-full h-20 p-10 flex items-center justify-between fixed shadow-lg bg-[#012546] z-10 bg-opacity-95 text-white'>
      <div>
        <h1 className='text-4xl font-signature font-bold'>Julia</h1>
      </div>
      <ul className='md:flex gap-5 z-10 hidden'>
        {links.map(({id,name}) => (<li className='hover:scale-110 duration-300 cursor-pointer capitalize' key={id}><Link to={name} smooth duration={500}>{name}</Link></li>))}
      </ul>
      <div onClick={() => (setNav(!nav))} className='md:hidden cursor-pointer pr-4 z-20 text-grey-500'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      {nav && (
        <ul className=' top-0 left-0 w-full h-screen bg-[#012546] flex flex-col justify-center items-center absolute z-10 p-4'>
            {links.map(({id,name}) => (<li className='hover:scale-110 duration-300 cursor-pointer text-2xl py-4 capitalize' key={id}><Link onClick={() => (setNav(!nav))} to={name} smooth duration={500}>{name}</Link></li>))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
