import React from 'react';
import { useState } from "react";
import './../App.css';
import { FaStar } from "react-icons/fa";
import { Button } from "@mui/material";
//import classNames from 'classnames';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function Feedback () {
    
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

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
        }}>
    
      
      <br /><br /><br /><br />   
      <br /><br /><br /><br />

      <h1 style={{marginTop:'-462px', color:'white'}}> Give us your Feedback! </h1>
     
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
      
      {/* <br /> */}
      <textarea   
        border='50px'
        placeholder="What's your experience?"
        style={styles.textarea}/>
     
       <Button variant='outlined' color='inherit' style={{color:'white' ,fontFamily:'math',width:'150px' , fontSize:'20px'}} >Submit</Button>
      
    </div>
    </section>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
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