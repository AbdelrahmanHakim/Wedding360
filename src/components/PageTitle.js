import React from 'react'
import styled from 'styled-components' 
import {Link} from 'react-router-dom'

const Wrapper = styled.div `
width: 65%;
margin-left: 18%;
padding-bottom:3%;

@media (max-width: 768px) {
margin-left: 2%;
padding-bottom:5%;
float:left;
width: 100%;
  }
`
const Title = styled.h3 `
font-weight:bold;
font-family: arial;
padding-left:1%;
margin-top:0%;
float:left;
@media (max-width: 768px) {
width:100%;
margin-left: 0%;
float:none;

  }
`
 const PageTitle = () => {
    return (
        <Wrapper>
           <Link to="/categories" 
           style={{color: "#008174",
            textDecoration:"none", 
            fontSize:"1.2rem",
            fontWeight:"bold",
            fontFamily: "arial",
            float: "left"}}>
               GALLERY
           </Link> 

           <Title>
           > 
           </Title>
        </Wrapper>
    )
}

export default PageTitle;