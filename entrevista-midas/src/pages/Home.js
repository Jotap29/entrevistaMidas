import React, {useState} from 'react';
//==========Material UI imports============
import {Button, CssBaseline, Fade, Grid, Modal, Typography, Backdrop} from '@material-ui/core'
//=============Components==================
import { backgroundImageStyle, useStyles } from '../assets'
import LogIn from '../components/logIn';


const Home=()=>{
  const classes = useStyles()

  //==========React Hooks==========
  const [open, setOpen] = useState(false)

 //*================ Modal Details Handlers ==========================
 const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
  return(
    <div style={backgroundImageStyle}>
      <CssBaseline/>
        <Grid container xs={12} className={classes.form}>
           <Grid item xs={'auto'} >
              <Typography component='h1'className={classes.typo} > Información sobre el covid-19 </Typography> 
            </Grid>
          <Grid item xs={'auto'}>   
              <Button className={classes.button} variant='outlined' onClick={()=>handleOpen()} >
                INGRESAR
              </Button>     
          </Grid>
        </Grid>

  {/* Modal del LogIn */}
            
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    onClose={handleClose}
                    open={open}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{timeout: 500,}}
                    >
                  <Fade in={open}>
                    <Grid item >
                      <LogIn/>
                    </Grid>
                  </Fade>
                  </Modal>
            
    </div>
)
}

export default Home
            


