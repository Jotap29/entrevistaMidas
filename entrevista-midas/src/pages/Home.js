import React, {useState} from 'react';
//==========Material UI imports============
import {Button, CssBaseline, Fade, Grid, Modal, Typography, Backdrop} from '@material-ui/core'
//=============Components==================
import { backgroundImageStyle, useStyles } from '../assets'
import LogIn from '../components/logIn';
import { getSession } from '../components/sessionStorage'
import { useHistory } from 'react-router-dom';


const Home=()=>{
  const classes = useStyles()

  //==========React Hooks==========
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState({
    name: '',
    password: '',
  })
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
        <Grid container  className={classes.form}>
           <Grid item xs={'auto'} >
              <Typography component='h1'className={classes.typo} > Información sobre el covid-19 </Typography> 
            </Grid>
          <Grid item xs={'auto'}>   
              <Button className={classes.button} variant='outlined' onClick={()=>( !getSession() ? handleOpen() : history.push('/panel') )} >
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
                      <LogIn setUser={setUser} user={user}/>
                    </Grid>
                  </Fade>
                  </Modal>
            
    </div>
)
}

export default Home
            


