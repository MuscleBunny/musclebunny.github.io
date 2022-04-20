import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ColorCard from '../components/ColorCard'
import CustomCard from '../components/CustomCard'
import TypographyCaption from '../components/TypographyCaption'

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

export default function WorkExperience() {
  return (
    <div style={divStyle} id={"back-to-WorkExperience"}>
    <TypographyCaption>
      WorkExperience
    </TypographyCaption>
      <CardContent>
        <ColorCard caption={"KAURI CRYPTO"} period={'JAN 2020 - JAN 2021'} contentCap={'Smart Contract Developer'}>
          <ul>
            <li>Integrated Layer 2 solution for saving fees in ethereum network with Polygon Matic</li>
            <li>Created and deployed staking contract for the platform token and created a demo DApp for staking contract. Implemented and deployed the graph for staking contract tracking all events and allowing more advanced queries in blockchain.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2020 - JAN 2021'}
          contentCap={'Full Stack Developer'}
          content={'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'}>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2020 - JAN 2021'}
          contentCap={'Full Stack Developer'}
          content={'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'}>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2020 - JAN 2021'}
          contentCap={'Full Stack Developer'}
          content={'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'}>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2020 - JAN 2021'}
          contentCap={'Full Stack Developer'}
          content={'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'}>
        </ColorCard>
      </CardContent>
    </div>
  );
}
