import React from 'react'
import styled from 'styled-components'


const Nav = styled.nav `

margin-left: 50%;
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
color: #008174;
font-size:13.4px;
font-weight:bold;
font-style: arial;
@media (max-width: 768px) {
text-align:left;
color:white;
font-size: 13.4px;

}
`

 const PhotosPagination = ({postsPerPage, totalPosts, paginate }) => {
        const pageNumbers = [];

        for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i)
        }
    return (
        <Nav>
            <UnorderedList>
                {pageNumbers.map(number => {
                  return  <List key={number}>
                        <Anchor onClick={()=> paginate(number)} 
                         >
                            {number}
                        </Anchor>
                    </List>
                })}
            </UnorderedList>
        </Nav>
    )
}

export default PhotosPagination;