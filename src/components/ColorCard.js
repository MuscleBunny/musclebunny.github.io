import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const cardStyle = {
  display: "flex",
  position: "relative",
  marginBottom: "20px",
}

const capStyle = {
    backgroundColor: "#bdbdbd",
    padding: "20px",
    marginBottom: "0px",
    maxWidth: "25%",
    width: "100%",
    textAlign: "center",
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
}

const bodyStyle = {
    padding: "20px",
}

const contentCapStyle = {
    marginLeft: "10px"
}

export default function ColorCard(props) {
  return (
    <Card style={cardStyle}>
        <div style={capStyle} color="primary">
            <Typography gutterBottom variant="body2">
                {props.period}
            </Typography>
            <Typography gutterBottom variant="h6">
                {props.caption}
            </Typography>
        </div>
        <div style={bodyStyle}>
            <Typography gutterBottom variant="h5" color="secondary" style={contentCapStyle} >
                {props.contentCap}
            </Typography>
            <Typography gutterBottom variant="body2" color="secondary" >
                {props.content}
            </Typography>
            {props.children}
        </div>
    </Card>
  );
}
