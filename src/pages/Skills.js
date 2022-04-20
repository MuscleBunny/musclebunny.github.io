import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import CustomCard from '../components/CustomCard'
import CustomProgress from '../components/CustomProgress';
import TypographyCaption from '../components/TypographyCaption'

function useWindowWidth() {
    const [width, setWidth] = React.useState(0);
    React.useLayoutEffect(() => {
      function updateSize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return width;
}

export default function Skills(props) {
    const {skillNames, skillValues} = props;
    const width = useWindowWidth();
  return (
    <CustomCard>
      <div id={"back-to-Skills"}></div>
      <CardContent>
        <TypographyCaption>
        Skills
        </TypographyCaption>
        {
            width > 600 ?
            <Grid container justifyContent="center" spacing={4} columns={16}>
                <Grid item xs={8}>
                    {skillNames.map( (val, index) => {
                        return index < skillNames.length/2 ? <CustomProgress name={val} value={skillValues[index]} key={index}></CustomProgress> : ''
                    })}
                </Grid>
                <Grid item xs={8}>
                    {skillNames.map( (val, index) => {
                        return index >= skillNames.length/2 ? <CustomProgress name={val} value={skillValues[index]} key={index}></CustomProgress> : ''
                    })}
                </Grid>
            </Grid>
            :
            skillNames.map( (val, index) => {
                return <CustomProgress name={val} value={skillValues[index]} key={index}></CustomProgress>
            })
        }
      </CardContent>
    </CustomCard>
  );
}

