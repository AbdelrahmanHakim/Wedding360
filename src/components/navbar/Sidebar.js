import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LogoImg from '../../images/logo.JPG'
import {useWindowScroll} from 'react-use'


const Nav = styled.nav `
display:flex;
position:fixed;
align-items:center;

height:50px;
width:100%;
top: 0;
background-color:white;
@media (max-width: 768px) {
  display:none;
  }
`

const UnorderedList = styled.ul `
list-style:none;
width:900px;
`


const List = styled.li `
display:inline;
padding-left:2%;
font-style: arial;
cursor:pointer;
font-size: 13.4px;
 }
`

const Anchor = styled.a `
text-decoration: none;
color:black;
font-size:13.4px;
font-weight:bold;
font-style: arial;
margin-left:2%;
}
`

const Logo = styled.img `
height:2.5rem;

  }
`




const DropdownLink = styled.div `
background-color: white;
margin-left: 32%;
z-index:-1;
position:absolute;
display: grid;
text-align:center;
float:right;
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

 const Sidebar = () => {

    const [open, setOpen] = useState(false)
    const {y:pageYOffset} = useWindowScroll()
    const [visible, setVisibility] = useState(false)

    useEffect(() => {
        if(pageYOffset >30){
            setVisibility(true)
        }else{
            setVisibility(false)
        }
       
    }, [pageYOffset])

    if(!visible){
        return false
    }

    const DropDownItem = <DropdownLink>
    <div>
     <DropDownLink to="/" >Wedding Ideas</DropDownLink>
    </div>
      <DropdownHR></DropdownHR>
      <div>
        <DropDownLink to="/categories" >More</DropDownLink>
      </div>
    </DropdownLink>
    return (
        <>

        <Nav  >
        <Anchor to="/">
              <Logo src={LogoImg} alt="logo"/>

                 </Anchor> 

         <UnorderedList >

         
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
               <Anchor href="#">
                   VENDORS
                </Anchor>
               </List>
              <List>
              <StyledLink to="/"  onMouseOver={()=>setOpen(!open)} >
               GALLERY
              </StyledLink> 
              {open && DropDownItem}
               </List>
               <List>
                <Anchor href="#">
                IDEAS & MORE
                </Anchor>
                </List>
           </UnorderedList> 
           
        </Nav>
      </>  
    )
}

export default Sidebar;