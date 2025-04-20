import React from 'react';

import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addtoDb';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, category, image, publisher,review, rating, totalPages, tags, yearOfPublishing } = singleBook || {};

  const handleMarkAsRead = id =>{
        addToStoredDB(id);
  }
  return (
    <div className='w-full flex mx-auto my-4 p-4 gap-4'>
      <img className='border-gray-400 w-64 bg-gray-300 p-10' src={image} alt="" />
      <div className='w-3/4 p-4'>
        <h1 className='text-2xl font-bold'>{bookName}</h1> <br />
        <p className='text-sm font-semibold p-2'>By:{publisher}</p>
        <div className='border-t-1 border-dashed'></div>
        <p className='p-2 text-sm font-medium'>{category}</p>
       
        
        <div className='border-t-1 border-dashed'></div>
        <p className='text-sm p-2'><span className='font-bold '>Review:</span>{review}</p>

        <div className='justify-center flex gap-15  p-2'>
          {
            tags.map(tag => <button className='badge bg-indigo-400 text-white'>{tag}</button>)
          }
        </div>
        <div className='border-t-1 border-dashed'></div>
        <div className='text-xs p-2'>
          
          <p className=''>Number of Pages: <span className='font-bold'>{totalPages}</span> </p>
          <p>Publisher: <span className='font-bold'>{publisher}</span></p>
          <p>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
          <p>Rating: <span className='font-bold'>{rating}</span></p>
        </div>


        <button onClick={()=>handleMarkAsRead(id)} className='btn rounded-xl bg-indigo-700 text-white m-2'>Read</button>
        <button className='btn rounded-xl font-bold bg-amber-400 text-indigo-700 m-2'>Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;