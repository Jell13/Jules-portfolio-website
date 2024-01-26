import React from 'react'
import hero from '../assets/myhero.png'

const Honors = () => {

  return (
    <div name="honors & awards" className='w-full h-3/4 bg-[#f8f8f8] p-4'>
      <div className=' max-w-screen-lg w-full mx-auto flex flex-col justify-center items-center p-4'>
        <div>
          <h1 className='font-bold text-2xl border-b-2 border-black inline'>Honors & Awards</h1>
        </div>
        <div className='w-full mt-8 grid sm:grid-cols-3 gap-16 py-8 text-center px-2 sm:px-0'>
          <div className=' w-full bg-gray-200 rounded-2xl'>
            <img src={hero} alt="" />
            <h1 className='font-bold'>Title</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus quae perferendis incidunt? Molestiae, ipsam. Odio est, pariatur neque voluptates officiis ea. Reiciendis accusamus, minus provident nostrum distinctio quod modi.</p>
          </div>
          <div className=' bg-gray-200 rounded-2xl'>
            <img src={hero} alt="" />
            <h1 className='font-bold'>Title</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus quae perferendis incidunt? Molestiae, ipsam. Odio est, pariatur neque voluptates officiis ea. Reiciendis accusamus, minus provident nostrum distinctio quod modi.</p>
          </div>
          <div className=' bg-gray-200 rounded-2xl'>
            <img src={hero} alt="" />
            <h1 className='font-bold'>Title</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus quae perferendis incidunt? Molestiae, ipsam. Odio est, pariatur neque voluptates officiis ea. Reiciendis accusamus, minus provident nostrum distinctio quod modi.</p>
          </div>
          <div className=' bg-gray-200 rounded-2xl'>
            <img src={hero} alt="" />
            <h1 className='font-bold'>Title</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus quae perferendis incidunt? Molestiae, ipsam. Odio est, pariatur neque voluptates officiis ea. Reiciendis accusamus, minus provident nostrum distinctio quod modi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Honors
