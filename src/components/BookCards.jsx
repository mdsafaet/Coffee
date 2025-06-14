import React from 'react'

export const BookCards = ({book}) => {


  const {image,bookName,author,tags,category} = book;
  return (
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-100 w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
     <div className="card-actions justify-end">  
        {
            tags.map(tag => <div className="badge badge-outline bg-green-200" >{tag}</div>)
        }
       
    </div>
    <h2 className="card-title">
    {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
     <div className="card-actions justify-between ">
      <div className="badge badge-outline">{category}</div>
<div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500"aria-current="true"  />
  <input type="radio" name="rating-1" className="mask mask-star bg-gray-300" />
</div>

    </div>
  
   
  </div>
</div>
  )
}

export default BookCards;
