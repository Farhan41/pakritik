import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';
import Container from './Container';


const Whatsapp = () => {
  return (
 
      <div className='fixed bottom-[35px] right-[35px]'>
     <Container>
     <button className=' bg-green-400 opacity-80 p-2 md:p-4 text-white rounded-md'>
    <ReactWhatsapp number="+880 1317-791280" message="Hello World!!!">
        <FaWhatsapp className='text-[30px] md:text-[50px]' />
    </ReactWhatsapp>
    </button>
     </Container>
   </div>
 
  )
}

export default Whatsapp