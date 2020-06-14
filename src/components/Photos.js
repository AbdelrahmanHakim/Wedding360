import React,{useState , useEffect} from 'react'
import axios from 'axios'
import SinglePage from './SinglePage'
import PhotosPagination from './PhotosPagination'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SearchWrapper = styled.div `
width: 65%;
margin-left: 18%;

@media (max-width: 768px) {
margin-left: 8%;
padding-bottom:18%;
float:left;
width: 100%;
}
`
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
const ClearBtn = styled.button `
    background-color: white;
    color:black;
    border-style:none;
    border: 1px solid;

`
const ApplyBtn = styled.button `
    background-color: black;
    color:white;
    border-style:none;
    border: 1px solid;
    margin-left:1%;

`
const Input = styled.input `
margin-top: 2%;
width:250px;
border: 1px solid;

:hover {
		color: #008174;
		cursor: pointer;
	}
    @media (max-width: 768px) {
        margin-top: 3%;
        width:300px;
        height:30px;
        border: 1px solid;

}
`

 const Photos = () => {
     const [searchTerm, setSearchTerm] = useState("")
     const [photos,setPhotos] = useState([])
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage] = useState(9)
     const [filteredPhotos, setFilteredPhotos] = useState(null)
    
     const handleChange = e => setSearchTerm(e.target.value)
    
     const onApply = () => {
        const filteredPhotos = photos.filter(photo => {
            return photo.name === searchTerm
        })

        setFilteredPhotos(filteredPhotos)
     }
     
     const clear = ()=> {
         setFilteredPhotos(null)
         setSearchTerm("")
        }

     useEffect( () => {
        axios.get('http://localhost:3002/photos')
        .then(res => {

           setPhotos(res.data)
          
        })
       
     },[])

     
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = photos.slice(indexOfFirstPost,indexOfLastPost)

     const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <>
               <SearchWrapper>
            <ClearBtn
            onClick={clear}
            >
           Clear
         </ClearBtn>
            <ApplyBtn onClick={onApply}>
                Apply
            </ApplyBtn> <br></br>
            <Input placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            />
        </SearchWrapper>
        { !filteredPhotos ?
        <SinglePage photos={currentPosts}/>:
        filteredPhotos !==null &&
        filteredPhotos.map((photo,key) => {
            return (
                <Wrapper>
            <ImgContainer key={photo.id} >
              <Link to={`photos/${photo.id}`} >
                  <Img src={photo.imgURL}/>
              </Link>
                
              <NameWrapper>
              <PhotoTitle>{photo.name}</PhotoTitle>
  
              </NameWrapper>
               </ImgContainer>
               </Wrapper>
        )})
        }
         <PhotosPagination 
            postsPerPage={postsPerPage} 
            totalPosts={photos.length}
            paginate={paginate}
         />
        </>
    )
}

export default Photos;