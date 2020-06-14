import React,{useState} from 'react'
import styled from 'styled-components'
import Burger from '../components/navbar/Burger'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import {IoIosArrowDown} from 'react-icons/io'
import {Link} from 'react-router-dom'
import  FadeIn from 'react-fade-in';
import ScrollTop from '../components/ScrollTop'
import DivOnHover from '../components/DivOnHover'
const DropDownMenu = styled.div `
 margin-left:18%;
 border-style: solid;
 width: 500px;
 height: 40px;
 margin-bottom:2%;
 h2{
    margin-top:5px;
    padding: 1px;
    font-family: monospace;
    text-align:center;
    cursor:pointer;
    letter-spacing: 0.2rem;
 }

 @media (max-width: 768px) {
 margin-left:0%;
 border-style: solid;
 width:380px;
 height: 30px;
 float:left;
 h2{
    padding: 0px;
    font-family: monospace;
    text-align:center;
    cursor:pointer;
    letter-spacing: 0rem;
 }
  }
`
const DropNav = styled.nav `
margin-left:18%;
background-color: black;
width:975px;

@media (max-width: 768px) {
margin-left:0%;
background-color: black;
width:275px;
margin-top:15%;
  }
`
 const DropUnOrdered = styled.ul `
 list-style:none;
 display:flex;
 padding:6px;
 padding-left:35%;
 @media (max-width: 768px) {
display:flex;
 padding:6px;
 padding-left:1%;
  }
 `
 const DropDownList = styled.li `
 padding:25px;
 @media (max-width: 768px) {
padding:5px;
  }
 `
 const DropDownLink = styled(Link) `
 text-decoration: none;
 color: white;
 `
 const SearchInput = styled.input `
   margin-right: 18%;
    float:right;
    border-style: solid;
    border-color: black;
    width: 450px;
    height:39px;
    padding: 1px;
    font-size:1.5rem;
    font-family: monospace;
    text-align:center;
    letter-spacing: 0.2rem;
    color: #008174;
    
    ::placeholder{
        padding-top: 5px;
        font-family: monospace;
        letter-spacing: 0.2rem;
        color:black;
        font-size:1.5rem;
        font-weight:strong;
    }
    @media (max-width: 768px) {
    display:none;
  }
 
 `

 const Categories = () => {
    const [open, setOpen] = useState(false)

    const DropDownItem = 
    <FadeIn>
    <DropNav>
    <DropUnOrdered>
    <DropDownList>
     <DropDownLink to="/categories/1" >Wedding Ideas</DropDownLink>
    </DropDownList>
    <DropDownList>
        <DropDownLink to="/categories/2">Cakes</DropDownLink>
      </DropDownList>
      <DropDownList>
        <DropDownLink to="/categories/3">Dresses</DropDownLink>
      </DropDownList>
      </DropUnOrdered>
    </DropNav>
    </FadeIn>

    return (
        <>
            <Burger />
            <SearchInput placeholder="SEARCH"/>

            <DropDownMenu  onClick={()=>setOpen(!open)} >
              <h2> FIND CATEGORIES HERE <IoIosArrowDown/> </h2> 

              </DropDownMenu> 
              {open && DropDownItem}
              <ScrollTop />
            <DivOnHover />
            <Testmonials />
            <Footer /> 
        </>
    )
}

export default Categories;