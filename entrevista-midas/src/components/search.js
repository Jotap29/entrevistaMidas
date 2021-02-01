import React from "react";
import axios from 'axios';
//==========Material UI imports============
import {Button, Grid,} from '@material-ui/core'
//===============Components================
import { CssTextField, useStyles } from "../assets";
import SelectCustom from "../components/select"
import { apiKey as key } from '../api-key'

 const Search=({filters, setFilters, providers, setData})=>{
   const classes = useStyles();


   return(
         <Grid className={classes.jornalia} container>
            <Grid item  className={classes.filts}>
               <CssTextField value={filters.kword} onChange={e=>{setFilters({...filters, kword: e.target.value})}} variant='filled' label='Palabras clave' /> 
               <SelectCustom providers={providers} filters={filters} setFilters={setFilters} selectName={filters.medios} label='Medios'/>
               <CssTextField value={filters.startDate} onChange={e=>{setFilters({...filters, startDate: e.target.value})}} variant='filled' label='Desde: ' type='date' />
               <CssTextField value={filters.endfDate} onChange={e=>{setFilters({...filters, endDate: e.target.value})}} variant='filled' label='Hasta: ' type='date'/>
            </Grid>
             <Button onClick={()=>{  
                 axios.get (`https://api.jornalia.net/api/v1/articles?apiKey=${key}&search=${filters.kword}&providers=${filters.medios.join(',')}&startDate=${filters.startDate}&endDate=${filters.endDate}`) 
                     .then ((res) => {
                        return res.data.articles
                  })
                  .then(r=>{
                     setData(r)
                  })
             }}
             className={classes.button}
             >Search</Button>
         </Grid> 
    )
 }                               
export default Search;

