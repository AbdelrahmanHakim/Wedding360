import React,{useEffect, useState} from 'react'
import Burger from '../components/navbar/Burger'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import axios from 'axios'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'

 const Wrapper = styled.div `
 margin-left: 18%;
 width:70%;
 display:grid;
 grid-template-columns: 1fr 1fr ;

 `
 const Img = styled.img `

 height:600px;
 width:500px;
 `
 const Naming = styled.div `
 `
 const Heading = styled.h1 `
 font-weight:bold;
 font-style: arial;
 font-size:2.5rem;
 `
 const Description = styled.h1`
 font-weight:bold;
 font-style: arial;

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
                </Naming>
            </Wrapper>
            <Testmonials />
            <Footer />
        </section>
    )
}

export default SinglePhoto;