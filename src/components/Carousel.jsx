// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'react-feather';


// const Carousel = ({ slides }) => {
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
//   const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

//   return (
//     <div className='md:w-[900px] overflow-hidden'>
//       <div className='grid md:grid-cols-3 gap-4 relative w-full transition-transform duration-500'>
//         {slides[current].map(({image,text}) => (
//           <div className='border-2 border-black'>
//             <img src={image} alt="" />
//             <p>{text}</p>
//             <div className='w-full flex justify-end'>
//               <a href="">Read more..</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className=' relative md:-top-2 flex items-center justify-between z-0 p-4'>
//         <button onClick={prev} className='bg-[#012546] rounded-full flex justify-center active:bg-[#3977b1] text-white'>
//           <ChevronLeft size={40} />
//         </button>
//         <button onClick={next} className='bg-[#012546] rounded-full flex justify-center active:bg-[#3977b1] text-white'>
//           <ChevronRight size={40} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div className='md:w-[900px] overflow-hidden'>
      <div className='flex justify-center items-center duration-500'>
          <div className={'w-full h-[500px] bg-center bg-cover bg-no-repeat duration-500 text-white ' + slides[current].image}>
            <div className='w-full h-full flex flex-col items-center p-12 bg-black bg-opacity-20'>
              <h1 className='text-center text-2xl font-bold'>{slides[current].title}</h1>
              <p className='mt-10 duration-500'>{slides[current].text}</p>
            </div>
          </div>
      </div>
      <div className=' relative md:-top-72 -top-72 flex items-center justify-between z-0 p-4'>
        <button
          onClick={prev}
          className=' rounded-full flex justify-center hover:bg-gray-400 active:bg-[#3977b1] text-white'
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className=' rounded-full flex justify-center hover:bg-gray-400 active:bg-[#3977b1] text-white'
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;


