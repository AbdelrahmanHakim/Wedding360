import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LogoImg from '../../images/logo.JPG'


const Nav = styled.nav `
width: 65%;
margin-left: 16%;
margin-bottom:5%;
@media (max-width: 768px) {
    padding-bottom: 15%;
    width: 100%;
    margin-left: -10%;
  }
`
const UnorderedList = styled.ul `
list-style:none;
@media (max-width: 768px) {
    display: ${({toggleNav}) => toggleNav ? 'grid' : 'none'};
    text-align: center;
    padding-right: 1%;
    width:350px;
    flex-flow: column nowrap;
    padding-top:25%;
    grid-template-columns: auto auto ;
  }
`


const List = styled.li `
display:inline;
padding-left:5%;
font-style: arial;
cursor:pointer;
font-size: 13.4px;

@media (max-width: 768px) {
padding-top: 15px;
margin-left: 0%;
background-color: black;
border: 1px solid rgba(255,255,255, 0.3);
text-align: center;
padding: 20px;
  }
`

const Anchor = styled.a `
text-decoration: none;
color:black;
font-size:13.4px;
font-weight:bold;
font-style: arial;
@media (max-width: 768px) {
text-align:left;
color:white;
font-size: 13.4px;

}
`
const SpecialAnchor = styled.a `
text-decoration:none;
color:black;
font-size:13.4px;
font-weight:bold;
font-style: arial;
padding-left:15%;
@media (max-width: 768px) {
  text-align:left;
  color:white;
  padding-left:0%;
  font-size: 13.4px;

  }
`
const Logo = styled.img `
width:8%;
height:12%;
padding-left:33%;
margin-top:-1%;
position:absolute;
@media (max-width: 768px) {
width:20%;
height:8%;
position:absolute;
padding-top:2%;
padding-left: 190px;
float:left;
  }
`


const HorizontalLine = styled.hr `
border: 0.5px solid black;
@media (max-width: 768px) {
display:none;
  }
`

const DropdownLink = styled.div `

background-color: white;
margin-right: 15%;
position:absolute;
left:66%;
z-index:1;
display: grid;
text-align:center;

padding-top: 3%;
padding-bottom:2%;
font-weight:bold;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-top:1%;
`
const StyledLink = styled(Link)`
   text-decoration: none;
   color:black;
   font-size:13.4px;
font-weight:bold;
font-style: arial;
   @media (max-width: 768px) {
    color:white;
  }
`
const DropDownLink = styled(Link) `
text-decoration: none;
 color:black;
 
`
const DropdownHR = styled.hr `

border:  2 solid black;
width:90px;
z-index:1;
`

 const Navbar = ({toggleNav}) => {
    const [open, setOpen] = useState(false)

    const DropDownItem = <DropdownLink>
    <div>
     <DropDownLink to="/categories/1" >Wedding Ideas</DropDownLink>
    </div>
      <DropdownHR></DropdownHR>
      <div>
        <DropDownLink to="/categories" >More</DropDownLink>
      </div>
    </DropdownLink>
    return (
        <>

        <Nav  >
        <Link to="/">
          <Logo src={LogoImg} alt="logo"/>
        </Link>

         <UnorderedList toggleNav={toggleNav}>
      
         

           <HorizontalLine />

               <List>
               <Anchor href="#">
                 360 PLANNER
                 </Anchor>
               </List>
                <List>
                <Anchor href="#">
                   HER
                </Anchor>
               </List>
               <List>
               <Anchor href="#">
                   HIM
                </Anchor>
               </List>
               <List>
               <Anchor href="#">
                   THE WEDDING
                </Anchor>
               </List>
               
               <List>
               <SpecialAnchor href="#">
                   VENDORS
                </SpecialAnchor>
               </List>
              <List>
              <StyledLink to="/"  onMouseOver={()=>setOpen(!open)} >
                Gallery
              </StyledLink> 
              {open && DropDownItem}
               </List>
               <List>
                <Anchor href="#">
                IDEAS & MORE
                </Anchor>
                </List>
               <HorizontalLine></HorizontalLine>
           </UnorderedList> 
           
        </Nav>
      </>  
    )
}

export default Navbar;