import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './dasbadmin.css';
import { Link } from 'react-router-dom';
// import Feedback from './components/Feedback';
// import AppCart from './AppCart';
// import Order from './components/Order';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'




const images = [
  
  // { 
  //   url: 'assets/order.png',
  //   title: 'ORDER' ,
  //   link: '/o',
  //   width: '40%',

    
    
  // }, 
  {
    url: 'assets/menu.png',
    title: 'MENU',
    link: '/menu',
    width: '30%',
  },
  {
    url: '/assets/feedback.jpg',
    title: 'FEEDBACK',
    link: '/f',
    width: '30%',
  },
];
//const order= require('../components/Feedback.js');

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
    height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Dashboard = () =>  {
  
      return (
        <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images.map((image) => (
            //<Link to={images.link} keys={images}>
            <ImageButton
            //Link to={images.link} keys={images.title}
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                  
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
            
            //</Link>
          ))}
          
        </Box>
        <ButtonGroup alignItems='center' aria-label="Basic example">
      <Button variant='secondary'>
        <Link to='/menu'>MENU</Link>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="secondary"><Link to='/menu'></Link></Button>
      <Button variant="secondary"><Link to='/f'>FEEDBACK</Link></Button>
    </ButtonGroup>
        <br /><br />

        <div className="orderpg" >
      <Typography gutterBottom variant="h4" style={{fontWeight:'bold', fontFamily:'Montserrat', fontWeight:'700' , textAlign:'center'}}> Today's Offers</Typography>
      <Grid container  style={{justify:'center' , alignItems:'center', direction:'column'}} >
        <Box   height='200px' style={{display: '-webkit-inline-box' }}>
           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='200'
             width='220'
              image="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/promote-your-food-combo-offers.jpg"
            
            />
             {/* <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Bhatura
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent> */}
           </Card>
          
           <Card style={{marginRight:'20px' }}>
            <CardMedia
             component='img'
             height='200'
             width='220'
              image="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/categorize-your-food-combo.jpg"
            
            />
             {/* <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Chapati
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               Chapati, also known as roti, rooti, rotee rotli, rotta, safati, shabaati, phulka, chapo, sada roti, poli, and roshi, is an unleavened flatbread originating from the Indian subcontinent and is a staple in India.
               </Typography>
             </CardContent>     */}
           </Card>


           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='200'
             width='220'
              image="https://www.dealnloot.com/wp-content/uploads/2019/03/faasos-bowl.png"
            
            />
             {/* <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Dosa
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               A dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world
               </Typography>
             </CardContent> */}
           </Card>

           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='200'
             width='220'
              image="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/add-drinks-to-make-a-delightful-food-combo.jpg"
            
            />
             {/* <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Fried Chicken
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               After some trial and error, they decided the chicken should be soaked in buttermilk and coated once in the breading mixture, then fried in oil at 350 °F (177 °C) in a pressure fryer until golden brown.
               </Typography>
             </CardContent> */}
           </Card>
         </Box>
        </Grid>
        {/* <br /><br />
        <div className="all">
        <Button variant="contained"  href="http://localhost:3000/menu" style={{alignContent:'center'}}>ORDER NOW</Button>
        </div> */}
      </div>
      


</div>
      
      );
}
export default Dashboard
