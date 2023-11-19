import React from 'react'
import Container from './Container'
import { useState, useEffect } from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";


const Footer = () => {


let [change, setChange] = useState(true);
const [theme, setTheme] = useState("light")


useEffect(()=>{

  if(theme == "dark"){
  document.documentElement.classList.add("dark");
  }else{
  document.documentElement.classList.remove("dark");
  }
  
  },[theme])

  // let handleThemeSwitch =()=>{
  //   setTheme(theme === "dark" ? "light" : "dark" )
  //   }

let handleFire =()=>{
  setChange(false)
  setTheme(theme === "dark" ? "light" : "dark" )

  if(!change){
    setChange(true)
  }
    
}

  return (

    <Container>
        <div className=' dark:bg-gray-700 dark:text-gray-400 py-5 border-t-2 relative' id="footer">
            <div className='text-center'>
            <p className='text-[14px]' >Copy right © 2023 By <a href="https://www.facebook.com/ferdousfarhan24">Farhan Ferdous</a> ❤️</p>
            </div>
            <div className='absolute bottom-4 right-3'>
              {
                change
                ?
                <button onClick={handleFire} className='bg-white text-black p-1 border-2 border-black rounded-md'><IoSunny /></button>
                :
                <button onClick={handleFire} className='bg-black text-white p-1 rounded-md'><FaMoon /></button>
              }
            </div>
        </div>
    </Container>
    
  )
}



export default Footer