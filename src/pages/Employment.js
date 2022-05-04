import * as React from 'react';
import CardContent from '@mui/material/CardContent';

import ColorCard from '../components/ColorCard'
import TypographyCaption from '../components/TypographyCaption'

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

export default function Employment() {
  return (
    <div style={divStyle} id={"back-to-Employment"}>
    <TypographyCaption>
      Employment
    </TypographyCaption>
      <CardContent>
        <ColorCard caption={"NFT Marketplace"} period={'AUG 2020 - Feb 2022'} contentCap={'Smart Contract Developer'}
          co={'Portion'}>
          <ul>
            <li>Developed an app similar to OpenSea that creates a marketplace of NFTs.</li>
            <li>Built and deployed NFT smart contracts to the Palm net.</li>
            <li>Created a hybrid payments system that allowed users to pay with either cryptocurrency or fiat money.</li>
            <li>Used IPFS for image storage with NFT metadata pointing to IPFS.</li>
          </ul>
        </ColorCard>
        <ColorCard caption={"Decentralized Exchange"} period={'JAN 2020 - AUG 2020'}
          contentCap={'Web3 | Smart Contracts Developer'}
          co={'Zigzag'}>
          <ul>
            <li>Built crypto exchange platform with React and web3.js.</li>
            <li>Create smart contract to build cryptocurrency exchange system.</li>
            <li>Built the front end of cryptocurrency exchange system in React and integrated with Web3.js.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Crowdlending"}
          co={"Ethic Hub"}
          period={'OCT 2018 - DEC 2019'}
          contentCap={'Blockchain Developer'}>
          <ul>
            <li>Developed the {/* first version of Ethichub's */} P2P lending platform based on Ethereum.</li>
            <li>Organized and successfully carried out a pre-ICO for project fundraising.</li>
            <li>Participated in technical meetings about designing the Ethichub solution.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2018 - OCT 2018'}
          co={'X2O Media'}
          contentCap={'Senior Full Stack Developer'}>
          <ul>
            <li>Developed and maintained a platform for real-time communication based on Node.js and Socket.IO.</li>
            <li>Built an Express.js + Socket.IO web server.</li>
            <li>Refactored code.</li>
            <li>Made unit tests and performance tests.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Avatar Engines"}
          period={'MAR 2017 - NOV 2017'}
          co={'Avatar Engines LLC'}
          contentCap={'Full Stack Developer'}>
            <ul>
              <li>Worked on providing API endpoints with Node.js/Inversify and MongoDB.</li>
              <li>Built from scratch admin platform for managing platform's database entities and users using React, Node.js, and Mongoose.</li>
              <li>Implemented complex UI components with React/TypeScript and SCSS.</li>
              <li>Improved the UX by creating several DnD-based components.</li>
              <li>Wrote scripts to use and manipulate data from various sources.</li>
            </ul>
        </ColorCard>
      </CardContent>
    </div>
  );
}
