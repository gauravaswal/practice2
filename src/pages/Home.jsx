import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Container, Image, Box, Text, Icon, VStack, StackDivider, Button } from '@chakra-ui/react'
import Nav from "../components/Nav"
import Slider from "../components/slider"
import Card from "../components/Card"

function Home() {

    return (
        <>
        <Nav />
        <Slider />
        <Card />
        <Slider />
        <Card />
        <Slider />
        <Card />
        </>
    );
}

export default Home;
