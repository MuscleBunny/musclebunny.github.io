import * as React from 'react';
import Typography from '@mui/material/Typography';

const capStyle = {
    
}

export default function TypographyCaption(props) {
  return (
    <Typography gutterBottom variant="h3" component="div" color="primary" style={capStyle}>
        {props.children}
    </Typography>
  );
}
