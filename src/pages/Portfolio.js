import * as React from 'react';
import TypographyCaption from '../components/TypographyCaption'

import MediaCard from '../components/MediaCard'
import Zigzag from '../assets/zigzagtrade.jpg'
import Portion from '../assets/portion.jpg'
import Ethichub from '../assets/ethichub.jpg'
import Chatify from '../assets/chatify.jpg'
import EtherBot from '../assets/ethBot.jpg'
import Memorial from '../assets/memorial.jpg'

const divStyle = {
    width: "85%",
    marginBottom: "50px",
    position: "relative",
    textAlign: "center",
}

export default function About() {
  const handleShare = function () {
    alert('a');
  }
  const actions = [
    /*{
      name: "Share",
      action: handleShare,
    }*/
  ];
  return (
    <div id={"back-to-Portfolio"} style={divStyle}>
    <TypographyCaption>
      Portfolio
    </TypographyCaption>
        <MediaCard actions={actions} imageSrc={Zigzag}>
        Decentralized Exchange
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Portion}>
        NFT Marketplace
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Ethichub}>
        Crowdlending
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Chatify}>
        Chatify
        </MediaCard>
        <MediaCard actions={actions} imageSrc={EtherBot}>
        Ethereum Bot
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Memorial}>
        Memorial Frontend
        </MediaCard>
    </div>
  );
}
