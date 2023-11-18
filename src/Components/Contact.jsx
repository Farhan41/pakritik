import React from 'react'

import Container from './Container';
import Grid from '@mui/material/Grid';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";



const Contact = () => {
  return (
    <Container>
        <div className='mt-10'>
        <Grid container spacing={0}>
    <Grid item xs={12} sm={6}>
        <div className='p-[60px]  flex flex-col gap-y-4'>
            <h1 className='font-dm font-bold text-center text-[30px]'>Contact Us</h1>
            <div className='flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-2'>
            <FaPhoneAlt />
            <p> +88 01674243434</p>
            </div>
            <div className='flex items-center gap-x-2'>
            <IoMdMail />
            <p>Pakritik@gmail.com</p>
            </div>
            <div className='flex items-center gap-x-2 '>
            <FaMap />
            <p > Companigonj, Bashurhat, Noakhali-3850, Bangladesh</p>
            </div>
            </div>
        </div>
    </Grid>

    <Grid item xs={12} sm={6} >
    <div className='w-full'>
    <iframe className='w-full h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5198.767263283942!2d91.27557221793754!3d22.873370494955726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753596889cbdca7%3A0x375133453937ea92!2sCompanigonj%2C%20Basurhat%203850!5e0!3m2!1sen!2sbd!4v1700265002751!5m2!1sen!2sbd" ></iframe>
        </div>
    </Grid>

  </Grid>
        </div>
    </Container>
  )
}

export default Contact


