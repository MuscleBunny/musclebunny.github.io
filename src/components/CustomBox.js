import * as React from 'react';
import Box from '@mui/material/Box';

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

export default function CustomBox(props) {
  return (
    <Box style={boxStyle}>
        {props.children}
    </Box>
  );
}
