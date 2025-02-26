import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useState } from 'react'
import {  Modal } from 'antd';


const Edit = ({api, get, name, id}) => {

    const [openEditModal,setEditModal]= useState(false)
     const [taskEditName,setEditTaskName]= useState(name)

     // put async
     const put = async (e) => {
        e.preventDefault()
        try {
          setEditModal(false);
           await fetch(`${api}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: taskEditName,
              id: id,
            }),
          });
      
          get()
        } catch (error) {
          console.error(error);
        }
      };
      
      
  return (
    <>
    <div className='editmodal'> 
        
      <Modal open= {openEditModal} onCancel={()=>setEditModal(false)} onOk={put} footer={null}>
        <form onSubmit={put} className='flex flex-col gap-[20px] py-[30px]'>
      <TextField id="standard-basic" label="Edit user" variant="standard" value={taskEditName} onChange={(e)=>setEditTaskName(e.target.value)}/>
        <button type='submit' className='border-1 text-[white] bg-[#4040d1] rounded-[6px] border-solid py-[8px]'>Save</button>
        </form>
      </Modal>
    </div>
    <button onClick={()=>setEditModal(true)} className='py-[5px] px-[30px]  dark:bg-gray-800 dark:border-gray-900 dark:hover:border-[white] dark:border-1 border-1 border-solid rounded-[5px] hover:border-1 transition-all duration-400'>Edit</button>
    </>
  )
}

export default Edit