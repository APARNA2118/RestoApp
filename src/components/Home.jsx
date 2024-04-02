
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../style/HomeStyles.css";
import { Card, CardContent, Typography ,Box, CardMedia, Paper, Grid, Button } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <br /><br /><br />
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>TEA TALKS</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

      <div><br /><br /><br /><br /></div>

      <div className="About">
        <Paper sx={{ padding:'32px' ,color:'#eeeeee'}}>
      <Typography  variant='h4' style={{fontWeight:'bold', fontFamily:'Montserrat', color:'black', textAlign:'center'}}>ABOUT US</Typography>
      <Typography variant="body2" style={{ textAlign:'center' , color:'#000',
    fontWeight: '400',
    textAlign: 'inherit',
    fontSize: '16px',
    lineHeight: '28px',
    wordSpacing: '0px',
    letterSpacing:'0px'}}>
      A place where some of the most exotic, sumptuous and authentic delights from even the hard to find but not-to-be-missed areas of Kerala are served.

Where the aromas of some distinctively native spices fill the air and awaken your senses and the flavors that linger on and keep titillating your taste buds.

From a humble beginning to a full service restaurant, we have come a long way and are better equipped and prepared to take you on a culinary journey that lets you dive into the rich heritage, background, and culture of southern paradise of India called Kerala.
      </Typography>
      </Paper>
      <br /><br /><br />
      </div>

      {/* order */}
      <div className="orderpg" >
      <Typography gutterBottom variant="h4" style={{fontWeight:'bold', fontFamily:'Montserrat', fontWeight:'700' , textAlign:'center'}}> OUR MENU</Typography>
      <Grid container  style={{justify:'center' , alignItems:'center', direction:'column'}} >
        <Box width='300px'  style={{display: '-webkit-inline-box' }}>
           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='140'
              image="https://media.istockphoto.com/id/1442492965/photo/chole-bhature-or-chana-masala-is-a-famous-indian-dish.jpg?s=1024x1024&w=is&k=20&c=XAU-xkcBQw9D60lTOji-_4ZA9dmFIUoVvY--LGC4SXE="
            
            />
             <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Bhatura
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent>
           </Card>
          
           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='140'
              image="https://media.istockphoto.com/id/545997902/photo/paneer-butter-masala-with-chapati-roti-paratha.jpg?s=1024x1024&w=is&k=20&c=W4fbNSLjLQ8V5AZtADWmyh9FK2x1RrZHwcHxb7cHFQk="
            
            />
             <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Chapati
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               Chapati, also known as roti, rooti, rotee rotli, rotta, safati, shabaati, phulka, chapo, sada roti, poli, and roshi, is an unleavened flatbread originating from the Indian subcontinent and is a staple in India.
               </Typography>
             </CardContent>    
           </Card>


           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='140'
              image="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
            />
             <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Dosa
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               A dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world
               </Typography>
             </CardContent>
           </Card>

           <Card style={{marginRight:'20px'}}>
            <CardMedia
             component='img'
             height='140'
              image="https://media.istockphoto.com/id/180725952/photo/fried-chicken-legs.jpg?s=1024x1024&w=is&k=20&c=HAmeSlIJMz4rkCIkNpeoXTbEm7HYeSFHEAWRGDuXLdk="
            
            />
             <CardContent>
               <Typography gutterBottom variant="h5" style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
               Fried Chicken
               </Typography>
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black',fontFamily:'Montserrat',fontWeight:'400', fontSize:'16px'}}>
               After some trial and error, they decided the chicken should be soaked in buttermilk and coated once in the breading mixture, then fried in oil at 350 °F (177 °C) in a pressure fryer until golden brown.
               </Typography>
             </CardContent>
           </Card>
         </Box>
        </Grid>
        <br /><br />
        <div className="all">
        <Button variant="contained"  href="http://localhost:3000/menu" style={{alignContent:'center'}}>ORDER NOW</Button>
        </div>
      </div>

    </Layout>
  );
};

export default Home;