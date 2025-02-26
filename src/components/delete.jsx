import React from 'react'

const Delete = ({id, api, get}) => {

   const  deleteUser=async (id)=>{
    try {
        await fetch(`${api}?id=${id}`, {
            method: 'DELETE'})
            get()
    } catch (error) {
        console.error(error);
        
    }
    }
  return (
    <div>
        <button className='py-[8px] px-[30px]  dark:bg-gray-800 dark:border-gray-900 dark:hover:border-[white] dark:hover:text-[white] tracking-[2px] dark:border-1 border-1 border-solid rounded-[5px] hover:border-1 transition-all duration-400'onClick={()=> deleteUser(id)}>Delete</button>
    </div>
  )
}

export default Delete