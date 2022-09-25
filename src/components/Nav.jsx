import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack, StackDivider, Icon, Container, Image, Text, HStack, Input } from '@chakra-ui/react'
import { MdSearch, MdShoppingCart } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { TbCurrencyDollar } from 'react-icons/tb'


const Navbar = () =>{
   
    return (
        <>
            <Box  >
                <Container maxW='1200px' bg='green.400' color='#262626' m={"0 auto"} >
                    <Flex gap={"28px"} justifyContent={"flex-end"}>
                        <Box >
                            <Icon as={MdSearch} w={20} h={20} pt={"5px"} />
                        </Box>
                        <Box >
                            <Icon as={AiOutlineUser} w={20} h={20} pt={"5px"} />
                        </Box>
                        <Box>
                            <Icon as={MdShoppingCart} w={20} h={20} pt={"5px"} />
                            <Text as="span" fontSize={"24px"} fontFamily={"obviously-medium"}>
                                0
                            </Text>
                        </Box>
                        <Box>
                            <Icon as={TbCurrencyDollar} w={20} h={20} pt={"5px"} fontFamily={"obviously-medium"} />
                            <Text as="span" fontSize={"24px"}>
                                0.00
                            </Text>
                        </Box>
                    </Flex>

                    <Flex justifyContent={"center"} mt={"20px"}>
                        <Image src="https://cdn.shopify.com/s/files/1/0187/6386/t/48/assets/ambsn-logo-v-21.svg?v=163830851973009420711613618614" w={"400px"} ></Image>
                    </Flex>

                    <HStack spacing='24px'>
                        <Box w='40px' h='40px' bg='yellow.200'>
                            <Text as="span" textColor={"#00269a"}>
                                all
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' >
                            <Text as="span">
                                swin
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            <Text as="span">
                                tops
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            <Text as="span">
                                fleece
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            <Text as="span">
                                hats
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            <Text as="span">
                                things
                            </Text>
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            <Text as="span">
                                kids
                            </Text>
                        </Box>
                    </HStack>
                </Container>

            </Box>
        </>
    );

}

export default Navbar