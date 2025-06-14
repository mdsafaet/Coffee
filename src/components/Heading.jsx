import React from 'react'

export const Heading = ({title,subtitle}) => {
  return (
    <div className='flex flex-col items-center justify-center my-8'>
        <h1 className='font-thin text-xl mb-4' >{title}</h1>
        <p className='font-thin text-xs text-center text-gray-600'>{subtitle}</p>
    </div>
  )
}
