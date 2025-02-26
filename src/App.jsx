import { useEffect, useState } from 'react';
import Delete from './components/delete.jsx'
import Edit from './components/edit.jsx'
import './App.css'
import Show from './components/getById.jsx';
import Add from './components/add.jsx'

const Api='https://to-dos-api.softclub.tj/api/categories'
function App() {
  const [data,setData]=useState([])

  const get= async ()=>{
    try {
      const data =await fetch(Api, {
        method: 'GET'
      })
      const res= await data.json()
      setData(res.data)
    } catch (error) {
      console.error(error);
      
    }
  }


  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  useEffect(()=>{
    get()
   handleClick()
  }, [])
  return (
    <>
    <div className='flex justify-center items-center mt-[60px] py-[20px]'>
      
      <div className='flex gap-[20px] items-center'>

      <Add api={Api} get={get}/>

    <button onClick={handleClick} className='border-solid border-2 px-[20px] rounded-[5px] py-[5px]'>Dark</button>
      </div>
    </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-[20px] sm:gap-[40px] w-[90%] sm:w-[90%] m-auto mb-[60px]'>
         {
          data.map((user)=>{
            return <div key={user.id} className='px-[20px] flex flex-col gap-[10px] items-center py-[20px] '>
            <p className='text-[20px] tracking-[3px] italic'>{user.name}</p>
            <div className='flex gap-[20px]'>
            <Delete id={user.id} get={get} api={Api} />
            <Edit name={user.name} id={user.id} get={get} api={Api}/>
            < Show id={user.id} api={Api} /> 
            </div>
            </div>
          })
         }
      </div>
    </>
  )
}

export default App
