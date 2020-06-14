import React, {useState, useEffect} from 'react'
import Burger from '../components/navbar/Burger'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'
import {TiChevronRight} from 'react-icons/ti'

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
`
 const CurrentPage = styled.h3 `
    color:black;
    font-size:1.2rem;
    font-weight:bold;
    font-family: arial;
    margin-top:0px;
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
const NameWrapper = styled.div `
width:200px;
padding-bottom: 20px;
`

const Category = () => {
      const [photos,setPhotos] =useState([])
      const [newPhotos, setNewPhotos]  = useState([])
      const [categName, setCategName]  = useState("")

      const {id} = useParams()
  
     useEffect( () => {
        axios.get('http://localhost:3002/photos')

        .then(res => {
           
           setPhotos(res.data)
        })
     },[])

     useEffect(() => {
      const newPhotos = photos.filter(photo => {
           return photo.category_id === id
       })
       setNewPhotos(newPhotos)
           const newArr =  Object.keys(newPhotos).map((key,i)=> {
           return newPhotos[key].category
       })
       setCategName(newArr[0])
     }, [photos])

    return (
        <section>
            <Burger />
            <ScrollTop />
            <BreadCrump>
              <PageTitle to="/">GALLERY</PageTitle>
              <TiChevronRight size={"1.5rem"}/>
                { <CurrentPage>
             {categName !== "" ? categName : "loading"} 
                </CurrentPage> }
            </BreadCrump>
         
            <Wrapper>
           
            {newPhotos !==null && newPhotos.map((photo,key) => {
                return <ImgContainer key={photo.id}>
               <Link to={`/photos/${photo.id}`}><Img src={photo.imgURL} /></Link> 
            
                <NameWrapper>
                    <PhotoTitle>{photo.name}</PhotoTitle>
                </NameWrapper>
                </ImgContainer>
                
            })}
           
            </Wrapper>
            <Testmonials />
            <Footer />
        </section>
    )
}

export default Category;