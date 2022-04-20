import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import CustomCard from '../components/CustomCard'
import TypographyCaption from '../components/TypographyCaption'

export default function About() {
  const handleShare = function () {
    alert('a');
  }
  const actions = [
    {
      name: "Share",
      action: handleShare,
    }
  ];
  return (
    <CustomCard actions={actions}>
      <div id={"back-to-About"}></div>
      <Avatar alt="Remy Sharp" src="../assets/avatar.jpg" sx={{width: "300px", height: "300px", float: "right", margin: "20px"}} />
      <CardContent>
        <TypographyCaption>
          About Me
        </TypographyCaption>
        <Typography variant="body2" color="secondary">
        Who am I?<br/>
        XXX has a great '' in software engineering and has been a full-stack developer since 2017.<br/>
        As a big crypto enthusiast, he decided to fully focus on blockchain development.<br/>
        He already has big experience with Smart Contract and dApps creation where most of them were built using Ethereum(public or private network).<br/>
        XXX is a great team player and takes time understanding projects and delivering in them in the best way.
        </Typography>
      </CardContent>
    </CustomCard>
  );
}
