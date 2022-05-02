import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import CustomCard from '../components/CustomCard'
import TypographyCaption from '../components/TypographyCaption'
import MyPhoto from '../assets/avatar.jpg'

export default function About() {
  const actions = [ "Share", "Share", "Share", "Share", "Share", "Share", "Share", "Share", ];
  return (
    <CustomCard actions={[]}>
      <div style={{display:'flex'}}>
      <div id={"back-to-About"}></div>
      <CardContent sx={{width:'100%'}}>
        <TypographyCaption>
          About Me
        </TypographyCaption>
        <Typography variant="body2" color="secondary">
        Who am I?<br/>
        As a full-stack and blockchain developer Akira has a great breadth and depth of experience include NFT.<br/>
        He is experienced with many DApps and Smart Contracts.<br/>
        He has worked on a variety of projects at companies of all sizes. He has been an important problem solver in the teams and never failed to deliver quality work with his hard work and problem-solving skills.
        Akira is a great team player and takes time understanding projects and delivering in them in the best way.
        </Typography>
      </CardContent>
      <Avatar alt="Remy Sharp" src={MyPhoto} sx={{width: "300px", height: "300px", float: "right", margin: "20px"}} />
      </div>
    </CustomCard>
  );
}
