import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const cardStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

const actionStyle = {
  display: 'block'
}
/*
const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.05)'
}
*/
export default function CustomCard(props) {
  return (
    <Card style={cardStyle}>
      {props.children}
      <CardActions style={actionStyle}>
        {props.actions ? props.actions.map( (action, index) => {
          return <Button size="small" key={index}>{action}</Button>
        } ) : "" }
      </CardActions>
    </Card>
  );
}
