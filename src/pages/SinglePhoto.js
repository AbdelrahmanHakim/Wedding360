import React,{useEffect, useState} from 'react'
import Burger from '../components/navbar/Burger'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import axios from 'axios'
import styled from 'styled-components'
import {useParams, Link} from 'react-router-dom'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import ScrollTop from '../components/ScrollTop'
import {TiChevronRight} from 'react-icons/ti'

 const Wrapper = styled.div `
 margin-left: 18%;
 width:70%;
 display:grid;
 grid-template-columns: 1fr 1fr ;
 @media (max-width: 768px) {
grid-template-columns:1fr;
margin-left: 1%;
  }
 `
 const Img = styled.img `
  height:600px;
 width:550px;
 @media (max-width: 768px) {
    height:300px;
    width:340px;  }
 `
 const Naming = styled.div `
 padding-left:3%;
 @media (max-width: 768px) {
    padding-left:0%;
     }
 `
 const Heading = styled.h1 `
 font-weight:bold;
 font-style: arial;
 font-size:2.5rem;
 @media (max-width: 768px) {
    font-weight:bold;
 font-style: arial;
 font-size:2rem;  }
 `
 const Description = styled.h1`
 font-weight:normal;
 font-style: arial;
 @media (max-width: 768px) {
 font-style: arial;
 font-size:1rem; 
 }
 `
 const Icons = styled.h2 `
 padding:2%;
  @media (max-width: 768px) {
   text-align:center }
 `
 
const BreadCrump = styled.div `
width: 65%;
margin-left: 18%;
padding-bottom:3%;
display:flex;
@media (max-width: 768px) {
margin-left: 2%;
padding-bottom:5%;
float:left;
width: 100%;
font-size:10px;
}
`
const PageTitle = styled(Link) `
    color: #008174;
    text-decoration:none;
    font-size:1.2rem;
    font-weight:bold;
    font-family: arial;
    &:hover{
        color: #013825;
    }
    @media (max-width: 768px){
        font-size:0.8rem;

    }
`
 const CurrentPage = styled.h3 `
    color:black;
    font-size:1.2rem;
    font-weight:bold;
    font-family: arial;
    margin-top:0px;
 `

 
 const SinglePhoto = () => {

    const  {id}  = useParams();
    const arrayNum = id-1
    const [photos,setPhotos] = useState([])
   
    useEffect( () => {
        axios.get('http://localhost:3002/photos')
        .then(res => {
       
           setPhotos(res.data[arrayNum])
           })
     },[])
    

  
    return (
        <section>
            <Burger />
            <BreadCrump>
              <PageTitle to="/"> GALLERY </PageTitle>
              <TiChevronRight size={"1.5rem"}/>
            <PageTitle to="/category/${photo.category_id}"> 
                {photos.category}
               
                </PageTitle>
                <TiChevronRight size={"1.5rem"}/>
                <CurrentPage>
               
                    {photos.name}
                </CurrentPage>
            </BreadCrump>
            <Wrapper>
            <ScrollTop />
          
         
                <Img src={photos.imgURL} alt="photo"/>
                <Naming>
                    <Heading>
                        {photos.name}
                    </Heading>
                    <Description>
                        {photos.description}
                    </Description>
                   <Icons> <FaFacebook /><FaTwitter />
                    </Icons>
                </Naming>
               
            </Wrapper>   
            <Testmonials />
            <Footer />
        </section>
    )
}

export default SinglePhoto;