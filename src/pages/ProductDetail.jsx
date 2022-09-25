import React from "react"
import Navbar from "../components/Nav"
import { Box, Flex, VStack, StackDivider, Select, Checkbox, Icon, Container, Image, Text, HStack, Input } from '@chakra-ui/react'
const ProductDetail = () => {
    return (
        <>
            <Navbar />
            <Container maxW='1200px' bg='green.400' color='#262626' m={"0 auto"} >
                <Flex>
                    <Box w={"50%"} height={"449px"} objectFit={"cover"}>
                  <Image src="https://cdn.shopify.com/s/files/1/0187/6386/products/WAKEUP_TOP_HOODIE_BLACK_FRONT_540x.jpg?v=1621380514" w={"79%"} height={"449px"}/>
                    </Box>
                    <Box border={"1px solid"} w={"70%"}>

                    </Box>
                </Flex>

            </Container>
        </>
    )


}
export default ProductDetail