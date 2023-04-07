

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
    <ServiceCarouselItem Title="Accounting & Bookkeeping" Destination={"Accounting_Bookkeeping"}/>  
    <ServiceCarouselItem Title="CFO Services" Destination={"CFO"}/>  
    <ServiceCarouselItem Title="Tax Services" Destination={"TAX"}/>  
    </Flex>
</Slide>
        <Slide index={1}>
<Flex gap="80px" padding="80px">
    <ServiceCarouselItem Title="VAT Services" Destination={"VAT"}/>  
    <ServiceCarouselItem Title="Audit & Assurance" Destination={"Audit_Assurance"}/>  
    <ServiceCarouselItem Title="Company Liquidation" Destination={"Company_Liquidation"}/>  
    </Flex>
</Slide>
        <Slide index={2}>Slide 3</Slide>
      </Slider>
<Flex gap="8px" marginTop={-20} width="100%" alignItems="center" justifyContent="center"  >
      <Button borderRadius={100} _hover={{background:'black'}} background='#ED4B37' onClick={()=>{{
    
    if (currentSlide == 0){
        return
    }else{

        setCurrentSlide(currentSlide-1)
    }
    }}}>
<ChevronLeft size={20} color="white"/>

</Button>
<Button  borderRadius={100} _hover={{background:'black'}} background='#ED4B37'  onClick={()=>{
    if (currentSlide == 1){
        setCurrentSlide(0)
    }else{
        setCurrentSlide(currentSlide+1)
    }
    }}>
    <ChevronRight size={20} color="white"/>
    </Button>

</Flex>

    </CarouselProvider>
</Flex>
  );
};

export default Carousel;
