import React, { useEffect, useState } from 'react';
import {Box, Text,} from '@chakra-ui/react'

function Slider() {

    return (
        <>
         <Box w={"100%"} h={"500px"} backgroundImage={"https://cdn.shopify.com/s/files/1/0187/6386/files/SUMMER22_SWIM_NEW.jpg?v=1652222511"}>
              <Box > 
                  <Text as="h1" position={"absolute"} top={"40%"} left={"40%"} fontSize={"85px"} color={"#00269a"} fontFamily={"obviously-black"}>
                      BUY 1 SHORT
                  </Text>
              </Box>
       
         </Box>
        </>
    );
}

export default Slider;
