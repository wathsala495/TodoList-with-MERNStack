import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {

    const [task,setTask]=useState()

   const handleAdd=()=>{
       axios.post('http://localhost:3001/add',{task:task})
       .then(result=>
        location.reload()
       )
       .catch(err=>console.log(err))
    }

  return (
    <div className=' 100% mt-3 mb-3'>
       <input type="text" name='' className=' border-[2px] border-y-black border-l-black p-2 w-[80%] border-r-[0px] ' placeholder='type your task' onChange={(e)=>setTask(e.target.value)}/>
       <button type='button' className='border-[2px] w-[20%] p-2 border-y-black border-r-black rounded-r-[30px] border-l-[0px] bg-[green]' onClick={handleAdd} > Add</button>
    </div>
  )
}

export default Create
