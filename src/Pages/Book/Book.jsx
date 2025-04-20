import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    const {bookName,category,image,publisher,rating,totalPages,tags,yearOfPublishing,bookId} = singleBook;
    
    
    return (
        <Link to={`/bookdetails/${bookId}`}>
        
        <div className="card bg-base-100 w-86 shadow-xl p-6">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
    <img 
       className='h-[170px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='justify-center flex gap-15'>
      {
        tags.map(tag => <button>{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge bg-amber-400 ">{yearOfPublishing}</div>
    </h2>
    <div className=' flex text-center items-center '>
    <FaPenToSquare/>
    <p>{publisher}</p>
    <p>Pages:{totalPages}</p>
    </div>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
      
    </div>
   
  </div>
</div>
        </Link>
        
    );
};

export default Book;