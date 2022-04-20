import * as React from 'react';
import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const barStyle = {
    backgroundColor: '#eee',
    height: "5px",
    width: "100%",
    position: 'relative',
    justifyContent: 'center'
}

const progressStyle = {
    // backgroundColor: '#252934',
    // backgroundColor: '#427375',
    backgroundColor: '#4D556A',
    height: "100%",
    position: 'absolute'
}

const containerStyle = {
    display: 'flex',
    flexDirection: "column",
    marginBottom: "20px",
    justifyContent: 'center',
    marginTop: "40px",
}

export default function CustomProgress(props) {
    const {name, value} = props;
  return (
    <Box sx={containerStyle}>
        <Box style={{marginBottom:"5px"}}>
            <Typography variant="body2" color="primary" sx={{marginLeft:"5px", float:"left"}}>{name}</Typography>
            <Typography variant="body2" color="primary" sx={{float:"right", marginRight:"5px"}}>{`${Math.round(value,)}%`}</Typography>
        </Box>
        <Box sx={barStyle}>
            {/* <LinearProgress variant="determinate" value={80}/> */}
            <Box sx={progressStyle} width={value+"%"}></Box>
        </Box>
    </Box>
  );
}

