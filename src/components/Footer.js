import React from 'react'
import styled from 'styled-components'

const FooterText = styled.div `
background-color: black;
font-family:arial;
margin-top:3%;
`
const Heading = styled.h3 `
padding-top:1%;
padding-left:1%;
color:white;
@media (max-width: 768px) {
    padding-top:5%;
    text-align:center;
  }
`
const Container = styled.div `
display:grid;
grid-template-columns: auto auto auto;

@media (max-width: 768px) {
display:block;

  }
`
const Copyrights = styled.p `
text-align: center;
color:white;
font-size: 60%;
@media (max-width: 768px) {
    text-align: center;

  }
`
const SocialIcons = styled.i `
padding-left: 1%;
color:white;
@media (max-width: 768px) {
    text-align: center;
    padding-right: 1%;

  }
`
const IconsContainer = styled.div `
padding-left:2%;
float:left;
@media (max-width: 768px) {
    text-align: center;
    float:none;
    padding-left:0%;
  }
`
const Terms = styled.p `
color:white;
padding-right:25%;
font-size: 60%;
text-align:right;
@media (max-width: 768px) {
    text-align: center;
    padding-right:0%;
  }
`
 const Footer = () => {
    return (
        <FooterText>
            <Heading>
                Weds360
            </Heading>
            <Container>
            <IconsContainer>
                <SocialIcons className="fa fa-facebook" />
                <SocialIcons className="fa fa-instagram"/>
   
            </IconsContainer>
  
            <Copyrights>
                &copy; Copyright Plus360. All Rights Reserved.
            </Copyrights>
            <Terms>
                Terms&Conditions <br></br>
                Privacy Policy
            </Terms>
            </Container>
         </FooterText>
    )
}


export default Footer;