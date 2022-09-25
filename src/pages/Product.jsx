import Navbar from "../components/Nav"
import Card from "../components/Card"
import { MdArrowDropDown } from 'react-icons/md'
import { Box, Flex, VStack, StackDivider, Select, Checkbox, Icon, Container, Image, Text, HStack, Input } from '@chakra-ui/react'
const Product= () => {
    return (
        <>
            <Navbar />
            <Container maxW='1200px' bg='green.400' color='#262626' m={"0 auto"} >
                <Flex>
                    <Box w={"20%"}>
                        <Select icon={<MdArrowDropDown />} placeholder='Woohoo! A new icon' padding={"8px"}>
                            <option>Hi</option>
                            <option>Test</option>
                        </Select>

                        <Box>
                            <Text as="h2">
                                Color
                            </Text>

                            <VStack direction={['column', 'row']} spacing='24px'>
                                <Checkbox size='md' colorScheme='green' defaultChecked>
                                    Checkbox
                                </Checkbox>
                                <Checkbox isInvalid>Checkbox1</Checkbox>
                            </VStack>
                        </Box>
                        <Box>
                            <Text as="h2">
                                Size
                            </Text>

                            <VStack direction={['column', 'row']} spacing='24px'>
                                <Checkbox isInvalid>X-Small</Checkbox>
                                <Checkbox isInvalid>Small</Checkbox>
                                <Checkbox isInvalid>Medium</Checkbox>
                                <Checkbox isInvalid>Large</Checkbox>
                                <Checkbox isInvalid>X-Large</Checkbox>
                                <Checkbox isInvalid>2X-Large</Checkbox>



                            </VStack>
                        </Box>
                    </Box>
                    <Box w={"50%"}>
                        <Card />

                    </Box>

                </Flex>

            </Container>
        </>
    )
}
export default Product