import React, {useState} from "react";
import {Button, Grid} from '@material-ui/core'
// import axios from 'axios';
import { CssTextField, useStyles } from "../assets";
// import key from '../api-key'

 const Search=()=>{
 const classes = useStyles();
 const [word, setWord] = useState('')
 




 
   return(
         <Grid className={classes.jornalia} container>
            <Grid item >
             <CssTextField value={word} onChange={e=>{setWord(e.target.value)}} variant='filled' label='Palabras clave' /> 
             <CssTextField value={word} onChange={e=>{setWord(e.target.value)}} variant='filled' label='Medios' select >
                {}

             </CssTextField>
             <CssTextField value={word} onChange={e=>{setWord(e.target.value)}} variant='filled' label='Categorias' select/>
             <CssTextField value={word} onChange={e=>{setWord(e.target.value)}} variant='filled' label='Desde: ' type='date' />
             <CssTextField value={word} onChange={e=>{setWord(e.target.value)}} variant='filled' label='Hasta: 2021-01-22' type='date'/>

            </Grid>
             <Button onClick={()=>{  
               //   axios.get (`https://api.jornalia.net/api/v1/articles?apiKey=${key}`) 
               //       .then ((res) => {
               //          console.log(res.data)

               //         return res.data
               //       })
             }}
             className={classes.button}
             >Search</Button>


         </Grid> 
    )
 }

export default Search;