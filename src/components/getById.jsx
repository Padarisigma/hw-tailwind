import React, { useEffect } from 'react'
import { useState } from 'react'
import {  Modal } from 'antd';
import Button from '@mui/material/Button';


const Show = ({id,api}) => {
    const [openShowModal,setShowModal]= useState(false)
    const [data,setData]=useState({})


    const getById= async ()=>{
        try {
            const data=await fetch(`${api}/${id}`, {
                method: 'GET'
            })
            const getId=await data.json()
          setData(getId.data);
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(()=>{
        getById()
    }, [id])
    
  return (
    <>
    <div className='showmodal'> 
        {
      <Modal open= {openShowModal} onCancel={()=>setShowModal(false)} footer={null}>
        <p>Name : {data.name}</p>
        <p>Id : {data.id}</p>
       
      </Modal>
}
    </div>
    <button onClick={()=>setShowModal(true)} className='py-[5px] px-[30px]  dark:bg-gray-800 dark:border-gray-900 dark:hover:border-[white] dark:border-1 border-1 border-solid rounded-[5px] hover:border-1 transition-all duration-400'>Show</button>

    </>
  )
}

export default Show