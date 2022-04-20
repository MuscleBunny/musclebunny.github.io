import React, { useCallback } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Box, Typography  } from '@mui/material';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesRain from "../particles/particlesRain";
import particlesLine from "../particles/particlesLine";
import particlesStar from "../particles/particlesStar";

const particleStyle = {
    heigth: "100vh",
    width: "100vh",
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-1",
}

const introStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
}

function Intro(props) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const {particleValue} = props;
    
    const selectParitlces = {
        "Rain": particlesRain,
        "Line": particlesLine,
        "Star": particlesStar
        }
    return (
        <Box style={introStyle}>
            <Particles options={selectParitlces[particleValue]} init={particlesInit} style={particleStyle}/>
            <Box style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pointerEvents: "none"
            }}>
                <Typography variant="h3" color="white">Hello I'm&nbsp;</Typography>
                <Typography variant="h3" color="error">XXX</Typography>
                <Typography variant="h3" color="white">.</Typography>
            </Box>
            <Typography variant="h3" color="white">
            <ReactTypingEffect
            text="I'm a Fullstack developer ... "
            speed="100"
            eraseDelay="100"
            />
            </Typography>
            
        </Box>
    );
}

export default Intro;