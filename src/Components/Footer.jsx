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
        <div className='py-5 border-t-2 flex items-center' id="footer">
            <p className='text-center w-[95%]'>Copy right © 2023 By <a href="https://www.facebook.com/ferdousfarhan24">Farhan Ferdous</a> ❤️</p>
            <div className='w-[5%]'>
              {
                change
                ?
                <button onClick={handleFire} className='bg-white text-black p-3 border-2 border-black rounded-md'><IoSunny /></button>
                :
                <button onClick={handleFire} className='bg-black text-white p-3 rounded-md'><FaMoon /></button>
              }
            </div>
        </div>
    </Container>
    
  )
}



export default Footer