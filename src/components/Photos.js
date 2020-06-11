import React,{useState , useEffect} from 'react'
import axios from 'axios'
import SinglePage from './SinglePage'
import PhotosPagination from './PhotosPagination'

 const Photos = () => {
     const [photos,setPhotos] = useState([])
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage] = useState(9)
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
         <SinglePage 
            photos={currentPosts}
           />
         <PhotosPagination 
            postsPerPage={postsPerPage} 
            totalPosts={photos.length}
            paginate={paginate}
         />
        </>
    )
}

export default Photos;