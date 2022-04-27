import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const cardStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

export default function CustomCard(props) {
  return (
    <Card style={cardStyle}>
      {props.children}
      <CardActions>
        {props.actions ? props.actions.map( (action, index) => {
          return <Button onClick={action.action} size="small" key={index}>{action.name}</Button>
        } ) : "" }
      </CardActions>
    </Card>
  );
}
