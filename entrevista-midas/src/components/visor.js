import React from 'react'
//==========Material UI imports============
import {Grid} from '@material-ui/core'
//=============Components==================
import { backgroundImageStyle, useStyles } from '../assets';
import NewsCardDemo from './newsCards';



const Visor = ({data}) => {
const classes = useStyles()
  return (
    <div style={backgroundImageStyle}>
    <Grid container className={classes.visor} >
      {data && data.map(art=> (
        <Grid item xs={12} sm={6} md={4} lg={3}   >
          <NewsCardDemo article={art}/>
        </Grid>
        ))}
    </Grid>
    </div>
     



  )
}

export default Visor
