import React from 'react'
import styled from 'styled-components'


const Nav = styled.div `
width:10%;
height:50%;
margin-bottom:5%;
text-align:center;
margin-left:45%;
@media (max-width: 768px) {
    margin-left:30%;
  }
`
const UnorderedList = styled.ul `
list-style:none;
display:flex;
justify-content: space-between;
margin-left:0%;
align-content:center;
width:55%;

`
const List = styled.li `
display:inline;
font-style: arial;
cursor:pointer;
font-size: 13.4px;
border-style: solid;
border-width: 1px;
border-color:  #ddd;
padding:10px;
 &:hover{
     background-color:#ddd;
 }

`

const Anchor = styled.a `
text-decoration: none;
color: #008174;
font-size:13.4px;
font-weight:bold;
font-style: arial;

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