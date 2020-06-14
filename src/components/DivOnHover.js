import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div `
margin-left:18%;
@media (max-width: 768px) {
    margin-left:4%;
  }
`

const DivBottom = styled.div `
width:300px;

}
`

const DivTop = styled.div `
position:absolute;
margin-top: -14%;
z-index:-1;
width:250px;
height:150px;
margin-left: 2%;
background-color:white;
cusror:pointer;
&:hover{
z-index:9999;

}
@media (max-width: 768px) {
margin-top: -50%;
width:250px;
height:150px;
margin-left: 8%;
  }
`

const Heading = styled.h3 `
font-weight: bold;
text-align:center;
padding-top:16%;
`

const Image = styled.img `
width:320px;
height:250px;
position:relative;
z-index:1;
&:hover{
z-index:-5;
`
const LinkStyle = styled(Link) `
text-decoration:none;
color:black;
`
 const DivOnHover = () => {
    return (
        <Wrapper>
            <DivBottom>
                <Image src ="https://i.ibb.co/V3yYFm5/artofhalo.jpg" 
                    
                />
            </DivBottom>
            <LinkStyle to="/categories/1">
            <DivTop>
         
            <Heading>
                Wedding Ideas
            </Heading>
           
            </DivTop>
            </LinkStyle>
        </Wrapper>
    )
}

export default DivOnHover;