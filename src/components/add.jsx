import { useEffect, useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button';
import {  Modal } from 'antd';
import Input from '@mui/material/Input';
const Add = ({api, get}) => {
    const ariaLabel = { 'aria-label': 'description' };
    const [taskName,setTaskName]= useState('')
     const [openAddModal,setAddModal]= useState(false)
     const add = async (user) => {
        try {
          const response = await fetch(api, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(user), 
          });
           await response.json(); 
          get(); 
        } catch (error) {
          console.error(error);
        }
      };
      
      
      useEffect(()=>{
        get()
      }, [])
      
      const addUser=(e)=>{
        e.preventDefault()
        const newUser={
          id: Date.now(),
          name: taskName,
        }
        setTaskName('')
        setAddModal(false)
        add(newUser)
      }
  return (
    <>
    <Button variant="contained" onClick={()=> setAddModal(true)}>Add User</Button>
    <div className='addmodal'> 
      <Modal open= {openAddModal} onCancel={()=>setAddModal(false)} onOk={addUser} footer={null}>
        <form onSubmit={addUser} className='flex flex-col gap-[20px]'>
      <Input placeholder="Add user" inputProps={ariaLabel} value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
      <button type='submit' className='border-1 text-[white] bg-[#4040d1] rounded-[6px] border-solid py-[8px] '> Save</button> 
        </form>
      </Modal>
    </div>
    </>
  )
}

export default Add