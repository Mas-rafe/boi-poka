import React from 'react';
import bookimage from '../../assets/books.jpg'



const Banner = () => {
    return (

        <div className='   border-gray-400 lg:rounded-2xl lg:p-20  justify-center  items-center   w-full mx-auto bg-gray-300'>
            <div className='p-16 lg:hidden' >

                <h1 className='text-2xl font-bold font'>Books to freshen up <br /> your bookshelf</h1> <br />
                <img className='w-[300px] h-[250px]  rounded-2xl shadow-2xl ' src={bookimage} alt="" /> <br />
                <button className='btn bg-indigo-700  rounded-xl text-white'>View The List</button>
            </div>

            <div className='gap-40 hidden  lg:flex' >
                <div className=''>
                    <h1 className='text-4xl font-bold font'>Books to freshen up <br /> your bookshelf</h1>
                    <button className='btn bg-indigo-700  rounded-xl text-white'>View The List</button>
                </div>
                <br />
                <div>
                    <img className='w-[250px] h-[250px]  rounded-2xl shadow-2xl ' src={bookimage} alt="" />
                </div>

            </div>

        </div>






    );
};

export default Banner;