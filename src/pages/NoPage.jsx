import React from 'react'
import { Link } from 'react-router'

export const NoPage = () => {
  return (
    <div>
        <h3>No Page Found </h3>   
    


       <Link to={'/'}>
        <button>Back to home</button>
       </Link>
   
       </div>

  );

};

