
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../style/HomeStyles.css";
import { Typography } from "@mui/material";

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
      <div className="About">
      <Typography style={{fontWeight:'bold',fontSize:'30px', fontFamily:'monospace',justifyContent:'center'}}>ABOUT US</Typography>
      <p>
      To create a global identity for Kerala cuisine with a unique experience of its food, art and culture at affordable prices.
      </p>
      </div>
    </Layout>
  );
};

export default Home;