import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { backgroundImageStyle, useStyles } from '../assets';
import Search from '../components/search';
import Visor from '../components/visor';
import {apiKey as key} from '../api-key'
import axios from 'axios';


//hacer un useEffect que haga el axios y le pase por props los arrays con los datos

const Panel = ()=>{

const [data, setData] = useState('')


  useEffect(()=>{
    axios.get(`https://api.jornalia.net/api/v1/articles?apiKey=${key}`)
    .then(r=>{
      console.log(r.data)
      setData(r.data)
      
      return r.data
    });
    // console.log(data) 
  },[])
  const classes = useStyles()
  return(
    <div style={backgroundImageStyle}>
      <CssBaseline/>
      <Grid container xs={12} className={classes.panel}>
          <Search/>
          <Visor/>
      </Grid>
    </div>
  )
}

export default Panel;