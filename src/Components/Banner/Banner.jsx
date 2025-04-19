import React from 'react';
import bookimage from '../../assets/books.jpg'



const Banner = () => {
    return (
        
           <div className='flex border-gray-400  rounded-2xl justify-center  items-center p-20 w-full mx-auto bg-gray-300'>
           <div className='mr-40 ' >
                <h1 className='text-4xl font-bold font'>Books to freshen up <br /> your bookshelf</h1>
               <br /> 
               <button className='btn bg-indigo-700  rounded-xl text-white'>View The List</button>
            </div>
            <div>
                <img className='w-[250px] h-[250px]  rounded-2xl shadow-2xl '  src={bookimage} alt="" />
            </div>
           </div>
        
    );
};

export default Banner;