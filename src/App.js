import React from 'react';

import CustomBox from './components/CustomBox';
import Navbar from "./components/Navbar";

import Intro from "./pages/Intro";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";

function App() {
    const skillNames = [ "HTML", "CSS", "JavaScript", "React", "Laravel", "Vue", "DJango", "Solidity", "Smart Contract", "Web3", "Ethereum", "NFT"];
    const skillValues = [ 100, 100, 100, 100, 100, 80, 90, 100, 100, 100 , 80, 100 ];
    const pages = ['Home', 'About', 'Skills', 'WorkExperience'];
    
    const settings = ['Rain', 'Line', 'Star'];
    const [particleVal, setParticleVal] = React.useState('Line');
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
            <WorkExperience></WorkExperience>
        </CustomBox>
    );
}

export default App;
