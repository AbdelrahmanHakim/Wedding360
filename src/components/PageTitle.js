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
&:hover{
        color: #013825;
    }
  }
`


 const Title = styled(Link) `
           color: #008174;
            text-decoration:none;
            font-size:1.2rem;
            font-weight:bold;
            font-family: arial;
            float: left;
 `
 const PageTitle = () => {
    return (
        <Wrapper>
           <Title to="/">
               GALLERY
           </Title> 

        </Wrapper>
    )
}

export default PageTitle;