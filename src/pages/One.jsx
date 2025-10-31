import React, { useState } from 'react'

const One = () => {

  const [show,setShow]=useState(true)

const [tasks,setTask]=useState([
  {
    id:1,
    title:"task one",
    completed:false,
  },
  {
    id:2,
    title:"task two",
    completed:true,

  }
  ,{
    id:3,
    title:"task three",
    completed:false,
  }




])

function handleDelete(id){

  setTask(tasks.filter(task=>task.id !== id))

}


  
  return (
    <div>
      <h1>Task List</h1>
      <li>


<button  className='border border-amber-200 bg-amber-700 item-center' onClick={ ()=>setShow(!show)}>Show list that matters</button>
        {
          show &&    tasks.map((task)=>(
          <div key={task.id}>
            <h2>{task.title}</h2>
            <button onClick={()=>handleDelete(task.id)} className='border border-amber-200 bg-amber-700' >delete</button>
          </div>
          
        ))
        }
      
      </li>
    </div>
  )
}

export default One

