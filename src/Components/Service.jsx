import React from 'react'
import { Card, Button } from 'flowbite-react';
import Heading from './Heading';
import Honey from '../assets/Honey.jpeg'
import Black from '../assets/black.jpg'
import Container from './Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import oil from '../assets/oil.jpg'

const Service = () => {
  return (
    <Container>

    
 <div className='dark:bg-gray-700 dark:text-gray-400' id='service'>
 <Heading/>

<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
      <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Honey}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Organic Honey
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est. Obcaecati suscipit assumenda animi labore dolorem nisi natus odio neque.
    </p>
     <Button href="https://www.facebook.com/prakritikfoodsnk">

      Visit us
      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  </Card>
      </Grid>

      <Grid item xs={12} sm={4} >
      <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Black}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Black Seeds
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est. Obcaecati suscipit assumenda animi labore dolorem nisi natus odio neque.
    </p>
    <Button href="https://www.facebook.com/prakritikfoodsnk">
    Visit us
      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
      <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={oil}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Mustured Oil
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est. Obcaecati suscipit assumenda animi labore dolorem nisi natus odio neque.
    </p>
    <Button href="https://www.facebook.com/prakritikfoodsnk">
    Visit us
      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  </Card>
      </Grid>

     

    </Grid>
  </Box>
 </div>


  
  
  </Container>
  )
}

export default Service