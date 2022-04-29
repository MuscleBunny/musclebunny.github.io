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
    <div style={divStyle} id={"back-to-WorkExperience"}>
    <TypographyCaption>
      Work Experience
    </TypographyCaption>
      <CardContent>
        <ColorCard
          caption={"Ethereum Bot"}
          contentCap={'Arbitration bots for decentralized crypto-currency.'}>
          Back in 2017, I created several arbitration bots for decentralized crypto-currency trading platforms (in particular EtherDelta, the leading platform at the time).
          This included various smart contracts and Python trading bots that were able to take advantage of the fact that such platforms were not performing any order matching, and that smart contract executions were atomic.
          In practice, the bots were able to find crossed SELL and BUY orders and execute them through my smart contracts in an atomic fashion, eliminating any risk. This was so profitable that many people started doing this and Ethereum had to change their policy on gas spending to avoid this behavior.
        </ColorCard>
        <ColorCard
          caption={"Smart Contract Development"}
          contentCap={'Crypto Token Design and Ethereum Blockchain Smart Contract Development'}>
            Developed a custom Crypto Token based on Ethereum Blockchain.
            Developed the web front end using JavaScript, Vue.js, and React to tokenize assets, confirm and prove authenticity, and track with a blockchain-based, tamper-proof audit trail.
        </ColorCard>
      </CardContent>
    </div>
  );
}
