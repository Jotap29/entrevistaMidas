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
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

//================= MUI Styles===========================
export const useStyles = makeStyles({
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
      transform: 'scale(1.1,1.1)',
      color: '#1C1C1C'
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
    width:'320px',
    border: '2px solid #fafafa',
    backgroundColor: 'rgba(255, 255, 255, 0.24)', 
  },
  panel:{
    backdropFilter: 'blur(9px)',
    height:'100vh',
  }
},[])


export const CssTextField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: '#fafafa',
          paddingLeft: 45
      },
      '& .MuiInputLabel-root':{
        paddingLeft: 45,
        color: '#fafafa'
      },
      width: '80%',
      paddingLeft:45,
      paddingTop:15,
      

  },
})(TextField)




