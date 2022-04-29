import * as React from 'react';
import CardContent from '@mui/material/CardContent';

import ColorCard from '../components/ColorCard'
import TypographyCaption from '../components/TypographyCaption'

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

export default function WorkExperience() {
  return (
    <div style={divStyle} id={"back-to-Education"}>
    <TypographyCaption>
      Education
    </TypographyCaption>
      <CardContent>
        <ColorCard caption={"Bachelor's Degree"} period={'2012 - 2016'} contentCap={'Bachelor of Engineering Degree in Computer Science'}>
            <div>
                Osaka University - Osaka, Japan
            </div>
        </ColorCard>
      </CardContent>
    </div>
  );
}
