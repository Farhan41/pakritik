import React, { useState } from 'react'
import Container from './Container'
import leaf from '../assets/leaf.png'
import { FaBarsStaggered } from "react-icons/fa6";


const TopNavbar = () => {

 let [bar, setBar] = useState(false)

 let handleBar = () =>{
   if(!bar){
    setBar(true)
   }else{
    setBar(false)
   }
 }

  return (
    <Container>
        <nav className='flex justify-between'>
        <div className='font-dm font-bold flex items-center'>
            <img src={leaf} alt="leaf" className='w-[50px] h-[50px]'/>
            <h3>PAKRITIK <span className='text-emerald-500'>FOODS</span></h3>
        </div>
        
        <div>
        <FaBarsStaggered onClick={handleBar} className='mt-4 mr-3 text-lg lg:hidden' />
            <ul className='font-dm font-normal  text-base hidden lg:flex items-center pt-3 gap-x-5 pr-3'>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
        </nav>
        {
            bar &&
            <ul className='font-dm font-normal text-emerald-500 text-base flex flex-col text-center lg:hidden pt-2  gap-y-5'>
            <li className='border-b-1'>Home</li>
            <li className='border-b-1'>Products</li>
            <li className=' mb-1'>Contact</li>
        </ul>
        }
    </Container>
  )
}

export default TopNavbar