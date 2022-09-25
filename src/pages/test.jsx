import { Box, Flex, VStack, StackDivider, Icon, Container, Image, Text, HStack, Input } from '@chakra-ui/react'
import React from "react"

const Test = () => {
    {console.log("- im here")}
    return (
        <>
            <Flex>
                <Box>
                    <VStack
                        divider={<StackDivider borderColor='gray' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h='40px' bg='yellow'>
                            1
                        </Box>
                        <Box h='40px' bg='tomato'>
                            2
                        </Box>
                        <Box h='40px' bg='pink'>
                            3
                        </Box>
                    </VStack>

                </Box>
                <Box>
                    <VStack
                        divider={<StackDivider borderColor='gray' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h='40px' bg='yellow'>
                            4
                        </Box>
                        <Box h='40px' bg='tomato'>
                            5
                        </Box>
                        <Box h='40px' bg='pink'>
                            6
                        </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack
                        divider={<StackDivider borderColor='gray' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h='40px' bg='yellow'>
                            7
                        </Box>
                        <Box h='40px' bg='tomato'>
                            8
                        </Box>
                        <Box h='40px' bg='pink'>
                            9
                        </Box>
                    </VStack>
                </Box>

            </Flex>

        </>
    )
}

export default Test