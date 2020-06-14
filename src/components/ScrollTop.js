import React,{useState, useEffect} from 'react'
import {useWindowScroll} from 'react-use'
import styled from 'styled-components'
import {FaArrowUp} from 'react-icons/fa'

const ScrollDiv = styled.div `
margin-top:30%;
margin-left: 94%;
background-color:white;
border-radius:30px;
padding:5px;
padding-top:10px;
text-align:center;
width:40px;
height:30px;
position:fixed;

cursor:pointer;
box-shadow: 1px 1px 1px 1px #888888;
@media (max-width: 768px) {
    margin-left: 75%;
    margin-top:80%;
  }
`


 const ScrollTop = () => {
    const {y:pageYOffset} = useWindowScroll()
    const [visible, setVisibility] = useState(false)
    useEffect(() => {
        if(pageYOffset >100){
            setVisibility(true)
        }else{
            setVisibility(false)
        }
       
    }, [pageYOffset])
    const scrollToTop =() => window.scrollTo({top:0, behavior: "smooth"})
    if(!visible){
        return false
    }
    return (
        <ScrollDiv onClick={scrollToTop}>
            <FaArrowUp color='#008174'/>
        </ScrollDiv>
    )
}


export default ScrollTop;