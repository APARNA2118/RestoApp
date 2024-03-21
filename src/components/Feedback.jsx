import React from 'react';
import { useState } from "react";
import './../App.css';
import { FaStar } from "react-icons/fa";
import { Button } from "@mui/material";
//import classNames from 'classnames';
//import image from '../restaurant/src/assets/food-feedback.jpg';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Feedback () {
    
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  // const myStyle={
    //     backgroundImage:`url(${image})`,
    //     backgroundSize:'cover',
    //     backgroundRepeat:'no-repeat',
    //     height:"100vh",
    //     fontSize:'50px',
    // };

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <section className="Food-bg">
    <div className="contents"
    
    style={{
        ...styles.container,
        //...myStyle,
        }}>
    
      
      <br /><br /><br /><br />   
      <h1 style={{marginTop:'-184px', color:'white'}}> Give us your Feedback! </h1>
     
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      
      <br />
      <textarea   
        border='50px'
        placeholder="What's your experience?"
        style={styles.textarea}/>
         

      {/* <textarea className={classNames(styles.Feedback, { border: '50px' })} placeholder="What's your experience?" style={styles.textarea} /> */}

      {/* <button
        variant='outlined'
        //style={styles.button}
        style={{color:'blue'}}
      >
        Submit
      </button> */}
       <Button variant='outlined' color='inherit' style={{color:'blue'}} >Submit</Button>
      
    </div>
    </section>
  );
};


const styles = {
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center"
  // },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    color: "#333"
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    color: "#fff"
  }

};




export default Feedback;