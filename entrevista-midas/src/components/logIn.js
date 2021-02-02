import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//==========Material UI imports============
import { Button, Grid, Typography } from '@material-ui/core';
//==============Components=================
import { CssTextField, useStyles } from '../assets';
import { setSession } from './sessionStorage'

const LogIn=({setUser, user})=>{
  const classes = useStyles();
  //=============React Hooks==============
  const [invalid, setInvalid] = useState(true)
  

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
      <Grid className={classes.modalCont} container  >
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
        <Button className={classes.button} disabled={invalid} onClick={setSession(user)}>
          <Link to='/panel' style={{textDecoration:'none' }} className={invalid ? classes.disabled : classes.enabled}>
              ACEPTAR
          </Link>
        </Button>
      </Grid>
    )
  }

export default LogIn   