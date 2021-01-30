import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../assets';
const LogIn=()=>{
  
  const classes = useStyles();
    return(
      <Grid className={classes.modalCont} container xs={12} >
        <Typography> Inicia sesión </Typography>
        <TextField id='usuario' label="Nombre de usuario" variant="filled" className={classes.button} autoComplete='off' />
        <TextField id='contraseña' label="Contraseña" variant="filled" className={classes.button} type='password' autoComplete='off'/>
        <Link to='/panel' style={{textDecoration:'none'}}>
          <Button className={classes.button}>ACEPTAR</Button>
        </Link>
      </Grid>
    )
  }

export default LogIn