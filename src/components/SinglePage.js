import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Wrapper = styled.div `
width:45%;
margin-left: 38%;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
@media (max-width: 768px) {
width:80%;
margin-left: 1%;
display:grid;
grid-template-columns: 1fr 1fr;
  }
`
const ImgContainer = styled.div `
margin-top:-6%;
width:25%;
`
const Img = styled.img `
width:200px;
height:230px;
@media (max-width: 768px) {
    width:170px;
    height:230px;
  }
`
const PhotoTitle = styled.h4 `
grid-column-start: 1;
grid-column-end: 3;
`
const NameWrapper = styled.div`
width:200px;
padding-bottom: 20px;
`
 const SinglePage = ({photos}) => {
    return (
        <Wrapper>
        
        {photos && Object.keys(photos).map((photo, key) => {
           return (
              <ImgContainer key={photos[photo].id} >
              <Link to={`photos/${photos[photo].id}`} >
                  <Img src={photos[photo].imgURL}/>
              </Link>
                
              <NameWrapper>
              <PhotoTitle>{photos[photo].name}</PhotoTitle>
  
              </NameWrapper>
               </ImgContainer>
           )
        })}
        
       
       
          </Wrapper>
    )
}

export default SinglePage;