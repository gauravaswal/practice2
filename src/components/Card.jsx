import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Container, Image, Box, Text, Icon, VStack, StackDivider, Button, Flex } from '@chakra-ui/react'
import { TbCurrencyDollar } from 'react-icons/tb'

const test = [
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/AMBSN60eca307d6460960eca307d65af.5209712260eca307d65af_540x.jpg?v=1626738498"
    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/AMBSN624c8ac4df1025624c8ac4df18c.07553432624c8ac4df18c_540x.jpg?v=1649276511"
    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/MOTHER_HAT_540x.jpg?v=1649276507"
    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/MOTHER_HAT_540x.jpg?v=1649276507"

    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/PINECLUB_HAT_540x.jpg?v=1649276516"
    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/BAIT_HAT_540x.jpg?v=1649276521"
    },
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0187/6386/products/PINE_TOP_WOVEN_22_BACK_540x.jpg?v=1644360972"
    }
]
function Card() {

    return (
        <>
            <Container maxW='800px' bg='green.400' color='#262626' m={"0 auto"} >

                <Grid templateColumns='repeat(3, 1fr)' gap={8} pl={"15px"}>
                    {test.map(data => {
                        return (
                            // <>    
                            <Box border={"1px solid"}> 
                                <Image src={data.image} w={"600px"} w={"250px"} h={"190px"} objectFit={"cover"}></Image>
                                <Box textAlign={"center"}>

                                    <VStack
                                        divider={<StackDivider borderColor='gray.200' />}
                                        spacing={4}
                                        align='stretch'
                                    >
                                        <Box >
                                            <Text as="h3">
                                                Pan
                                            </Text>
                                        </Box>
                                        <Box >
                                            <Box>
                                                <Icon as={TbCurrencyDollar} w={20} h={20} pt={"5px"} fontFamily={"obviously-medium"}
                                                >
                                                    <Text as="h3">
                                                        Pan
                                                    </Text>
                                                </Icon>
                                            </Box>
                                        </Box>
                                        <Box h='40px' bg='pink.100'>
                                        <Button colorScheme='whiteAlpha'>WhiteAlpha</Button>
                                        </Box>
                                    </VStack>

                                </Box>
                            </Box>
                        )
                    })}
                </Grid>
                <Flex justifyContent={"center"} pt={"18px"}>
                <Button colorScheme='whiteAlpha'>VIEW ALL</Button>
                </Flex>
            </Container>


        </>
    );
}

export default Card;
