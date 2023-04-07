

import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Flex, Text } from '@chakra-ui/layout';
import ServiceCarouselItem from './ServiceCarouselItem';
import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Button } from '@chakra-ui/button';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  return ( 
    <Flex className='HideOnMobile' gap={0} flexDir="column">
    <Text className='HideOnMobile' marginBottom="-40px" fontWeight="bold" fontSize="3xl">Businesses benefit from our extensive experience in</Text>
    <CarouselProvider
className='HideOnMobile'
currentSlide={currentSlide}
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={3}
    >

      <Slider style={{height:"560px", position:'relative'}}>
        <Slide index={0}>
    <Flex gap="80px" padding="80px">
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    </Flex>
</Slide>
        <Slide index={1}>
<Flex gap="80px" padding="80px">
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"k"}/>  
    </Flex>
</Slide>
        <Slide index={2}>Slide 3</Slide>
      </Slider>
<Flex marginTop={-20} width="100%" alignItems="center" justifyContent="center"  >
      <Button onClick={()=>{{
    
    if (currentSlide == 0){
        return
    }else{

        setCurrentSlide(currentSlide-1)
    }
    }}}>
<ChevronLeft/>

</Button>
<Button onClick={()=>{
    if (currentSlide == 1){
        setCurrentSlide(0)
    }else{
        setCurrentSlide(currentSlide+1)
    }
    }}>
    <ChevronRight/>
    </Button>

</Flex>

    </CarouselProvider>
</Flex>
  );
};

export default Carousel;
