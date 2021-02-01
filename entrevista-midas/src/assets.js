import {makeStyles, withStyles, TextField} from '@material-ui/core'

//=================Background Images=====================
const backgroundImages = [
  'https://planamayor.com.mx/wp-content/uploads/2020/04/covid_19_planamayor8.jpg',
  'https://panversia.com/wp-content/uploads/2020/04/fusion-medical-animation-rnr8D3FNUNY-unsplash-scaled.jpg',
  'https://www.drjaviergonzalez.cl/wp-content/uploads/2020/03/coronavirus_1920x1080.jpg',
  'https://www.lt8.com.ar/wp-content/uploads/2020/08/NOTA-BBC-VIRUS.jpg'
  
]
const randomImg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
export const backgroundImageStyle = {
    background: `url(${randomImg})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundColor: '#1c1c1c',
    
  }

//================= MUI Styles===========================
export const useStyles = makeStyles(theme=>({
  button:{
        border: '2px solid #fafafa',
        color: '#fafafa',
        textDecoration: 'none',
        borderRadius: 5,
        marginTop: 10,
        '&:hover': {
            backgroundColor: '#fafafa',
            color: '#1C1C1C',
            transition: '0.7s',
        },
  },
  form:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    backdropFilter: 'blur(9px)',
    height:'100vh',
  },
  typo: {
    color: '#fafafa',
    borderRadius: 2,
    padding: 5,
    '&:hover':{
      color: '#1C1C1C',
      backgroundColor:'rgba(255, 255, 255, 0.24)'
    }
  },
  modalCont: {
    flexDirection: 'column',
    position: 'fixed',
    border:'2px solid #fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    color: '#fafafa',
    backgroundColor: 'rgba(255, 255, 255, 0.24)', 
    height: '250px',
    width:'100vw',
    top: '25vh',
    backdropFilter: 'blur(3px)',
},
  jornalia: {
    flexDirection:'column',
    justifyContent: 'start',
    alignItems: 'center', 
    height: '100%',
    padding: 10,
    border: '2px solid #fafafa',
    backgroundColor: 'rgba(255, 255, 255, 0.24)', 
  },
  filts:{
    flexDirection: 'column',
    display:'flex',
    width: '100%',
  },
  panel:{
    backdropFilter: 'blur(9px)',
    height:'100vh',
  },
  disabled: {
    color: 'grey'
  },
  enabled: {
    color: '#fafafa',
    '&:hover': {
      backgroundColor: '#fafafa',
      color: '#1C1C1C',
      transition: '0.7s',
  },
  },
  visor: {
    border: '2px solid #fafafa ', 
    height: '100vh', 
    width: '100%',
    overflow: 'auto',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(9px)',
  }

}),[])


export const CssTextField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: '#fafafa',
      },
      '& .MuiInputLabel-root':{
        color: '#fafafa'
      },
    paddingTop: 15,
  },
})(TextField)




