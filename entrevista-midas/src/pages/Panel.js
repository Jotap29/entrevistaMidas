import React, { useEffect, useState } from 'react';
import axios from 'axios';
//==========Material UI imports============
import { CssBaseline, Grid } from '@material-ui/core';
//===============Components================
import { backgroundImageStyle, useStyles } from '../assets';
import Search from '../components/search';
import Visor from '../components/visor';
import {apiKey as key} from '../api-key'
import { getSession } from '../components/sessionStorage'
import { useHistory } from 'react-router-dom';

const Panel = ()=>{
  const classes = useStyles()
//===========React Hooks============
const history = useHistory()
const [provs, setProviders] = useState([])
const [filters, setFilters] = useState({
  kword: 'coronavirus',
  medios: ['Clarin'],
  startDate: '',
  endDate: ''
})
const [data , setData] = useState([])
  useEffect(()=>{
    !getSession() ?  history.push('/') : 
    axios.get(`https://api.jornalia.net/api/v1/providers?apiKey=${key}`)
    .then(r=>{
      setProviders(r.data.providers)
      return r.data
    });
  },[])
  return(
    <div style={backgroundImageStyle}>
      <CssBaseline/>
      <Grid container  className={classes.panel}>
        <Grid item xs={12} sm={3} md={3} lg={2}>
          <Search providers={provs} filters={filters} setFilters={setFilters} setData={setData} data={data}/>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={10}>
          <Visor data={data}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Panel;