import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//==========Material UI imports============
import { Button, Grid, Typography } from '@material-ui/core';
//==============Components=================
import { CssTextField, useStyles } from '../assets';

const LogIn=()=>{
  const classes = useStyles();
  //=============React Hooks==============
  const [invalid, setInvalid] = useState(true)
  const [user, setUser] = useState({
    name: '',
    password: ''
  })

//============Validator function=============
  function validateInfo({name, password}) {
    if (!name || !password || password.length < 6) {
      setInvalid(true)
    } else {
      setInvalid(false)
    }
    setUser({name, password})
  }


    return(
      <Grid className={classes.modalCont} container xs={12} >
        <Typography> Inicia sesión </Typography>
        <CssTextField 
        id='name'
        label="Nombre de usuario"
        variant="filled"  
        autoComplete='off'
        onChange={e => validateInfo({...user, name: e.target.value})}
        />
        <CssTextField 
        id='password' 
        label="Contraseña"
        variant="filled" 
        type='password' 
        autoComplete='off'
        onChange={e => validateInfo({...user, password: e.target.value})}
        />
        <Button className={classes.button} disabled={invalid}>
          <Link to='/panel' style={{textDecoration:'none' }} className={invalid ? classes.disabled : classes.enabled}>
              ACEPTAR
          </Link>
        </Button>
      </Grid>
    )
  }

export default LogIn   