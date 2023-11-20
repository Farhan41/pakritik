import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';
import Container from './Container';


const Whatsapp = () => {
  return (
 
      <div data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500" className='fixed bottom-[135px] right-[10px]'>
     <Container>
     <button className=' bg-green-400 opacity-80 p-2 md:p-4 text-white rounded-md'>
    <ReactWhatsapp number="+880 1674-243434" message="I am interested...">
        <FaWhatsapp className='text-[40px] md:text-[50px]' />
    </ReactWhatsapp>
    </button>
     </Container>
   </div>
 
  )
}

export default Whatsapp