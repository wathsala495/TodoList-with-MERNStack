import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
    let [todos,setTodos]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
        console.log(todos)
        
    },[])
    const handleEdit=(id)=>{
       axios.put("http://localhost:3001/update/"+id)
       .then(result=>console.log(result))
       .catch(err=>console.log(err))
       location.reload()
    }
    const handleDelte=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3001/delete/"+id)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        location.reload()
    }

  return (
    <div className='mt-[30px] w-[50%]  '>
   <h2 className='text-3xl font-bold text-center'>Todo List</h2>
   <Create/>
   {
    todos.length===0? <div><h3>No Todos</h3></div>
    :todos.map((todo,index)=>{
        return(
         <div key={index} className='flex justify-between'>
           <div className='checkbox flex'onClick={()=>handleEdit(todo._id)}>
            {
             todo.done?<BsFillCheckCircleFill/> :<BsCircleFill className='icon' />
            }
            
            <p className={todo.done ? "line-through":""}>{todo.task}</p>
           </div>
           <div>
            <span><BsFillTrashFill className='icon' onClick={()=>handleDelte(todo._id)}/></span>
           </div>
         </div>
        )
    })
   }
    </div>
  )
}

export default Home
