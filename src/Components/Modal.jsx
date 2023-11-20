import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';



const Modal = () => {

    let [show, setShow] = useState(true)

    let handleClick =()=>{
        setShow(false)
    }


  return (
    <>
    {
        show
        ?
        (
            <div className='fixed top-0 z-50 w-full h-[100vh] backdrop-blur-md flex justify-center items-center'>
        <div className='gap-y-5 relative w-[300px] h-[200px] bg-white border-4 flex flex-col justify-center items-center'>
            <h1>This Website is under Construction!</h1> 
            <AiOutlineClose onClick={handleClick} className='text-[20px] absolute top-3 right-3'/>
            <button onClick={handleClick} className='w-[100px] h-[40px] bg-black text-white rounded-lg'>Continue</button>
        </div>
    </div>
        )
        :
        null
    }
    </>
    
  )
}

export default Modal