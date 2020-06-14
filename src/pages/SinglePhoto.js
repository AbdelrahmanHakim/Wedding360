import React,{useEffect, useState} from 'react'
import Burger from '../components/navbar/Burger'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import axios from 'axios'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {FaFacebook, FaTwitter} from 'react-icons/fa'

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
            <Wrapper>

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