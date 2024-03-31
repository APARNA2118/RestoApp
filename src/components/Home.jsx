
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
          <Link to="/cart">
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
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent>
           </Card>
          
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
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent>    
           </Card>


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
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent>
           </Card>

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
               <Typography variant="body2" style={{ justifyContent:'center' , color:'black'}}>
               Bhatoora is a fluffy deep-fried leavened sourdough bread originating from the Indian subcontinent. It is commonly served as a midday meal or a breakfast dish in northern and eastern India.
               </Typography>
             </CardContent>
           </Card>
         </Box>
        </Grid>
        <br /><br />
        <Button variant="contained"  href="http://localhost:3000/menu" style={{alignContent:'center'}}>ORDER NOW</Button>
      </div>

    </Layout>
  );
};

export default Home;