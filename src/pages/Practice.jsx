import React, { useState } from 'react'

const Practice = () => {

    const [add , setAdd] = useState(0)

    function handleAdd() {
        setAdd(add + 1)

        

    }

    function handlesub(){
        setAdd(add - 1)
    }


  return (
    <div>
        <h1>{add}</h1>
        <button className='border border-amber-700 bg-amber-400 mr-5' onClick={handleAdd}>Add</button>
        <button className='border border-amber-700 bg-red-700' onClick={handlesub}>Sub</button>
        <button className='border border-amber-700 bg-green-700' onClick={() => { setAdd(0) }}>Reset</button>

    </div>
  )
}

export default Practice
