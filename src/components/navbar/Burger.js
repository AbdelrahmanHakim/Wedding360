import React,{useState} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const StyledBurger = styled.div `
display:none;
@media (max-width: 768px) {
width: 1rem;
height: 2rem;
position: absolute;
top:15px;
right:50px;
display:flex;
justify-content: space-around;
flex-flow: column nowrap;
  div{
      width: 1.5rem;
      height: 0.25rem;
      background-color: #333;
      border-radius: 5px;
  }
  }

`
 const Burger = () => {
    const [toggleNav, setToggleNav] = useState(false)

    return (
        <>
        <StyledBurger toggleNav={toggleNav} onClick={()=>setToggleNav(!toggleNav)}>
        <div />
        <div />
        <div />
    </StyledBurger>
    <Navbar toggleNav={toggleNav}/>
    <Sidebar />
    </>
    )
}

export default Burger;