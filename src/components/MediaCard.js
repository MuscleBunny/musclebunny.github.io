import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardStyle = {
  margin: '20px',
  display: 'inline-block',
  width: '300px',
}
export default function MediaCard(props) {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="140"
        image={props.imageSrc}
        alt="green iguana"
        style={{borderBottom:'1px solid #00000050'}}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
            {props.caption}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
            {props.children}
        </Typography>
      </CardContent>
      {/* <CardActions>
        {props.actions ? props.actions.map( (action, index) => {
          return <Button onClick={action.action} size="small" key={index}>{action.name}</Button>
        } ) : "" }
      </CardActions> */}
    </Card>
  );
}