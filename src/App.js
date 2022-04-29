import React from 'react';

import CustomBox from './components/CustomBox';
import Navbar from "./components/Navbar";

import Intro from "./pages/Intro";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Employment from "./pages/Employment";
import Portfolio from "./pages/Portfolio"

function App() {
    const skillNames = [ "HTML", "CSS", "JavaScript", "React", "Laravel", "Vue", "DJango", "Solidity", "Smart Contract", "Web3", "Ethereum", "NFT"];
    const skillValues = [ 100, 100, 100, 100, 100, 80, 90, 100, 100, 100 , 80, 100 ];
    const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Employment', 'WorkExperience', 'Education'];
    
    const settings = ['Rain', 'Line', 'Star'];
    const [particleVal, setParticleVal] = React.useState('Rain');
    const selectParitlces = function (val) {
        switch(val) {
            case "Rain":
                setParticleVal('Rain');
                break;
            case "Line":
                setParticleVal('Line');
                break;
            case "Star":
                setParticleVal('Star');
                break;
            default:
                break;
        }
    }
    return (
        <CustomBox>
            <Navbar pages={pages} settings={settings} settingAction={selectParitlces}></Navbar>
            <Intro particleValue={particleVal}></Intro>
            <About></About>
            <Skills skillNames={skillNames} skillValues={skillValues}></Skills>
            <Portfolio></Portfolio>
            <Employment></Employment>
            <WorkExperience></WorkExperience>
            <Education></Education>
        </CustomBox>
    );
}

export default App;
