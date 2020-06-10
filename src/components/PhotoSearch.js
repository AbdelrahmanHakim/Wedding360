import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div `
width: 65%;
margin-left: 18%;
padding-bottom:8%;

@media (max-width: 768px) {
margin-left: 8%;
padding-bottom:18%;
float:left;
width: 100%;
}
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

 const Search = () => {
    return (
        <Wrapper>
            <ClearBtn>
                <Link to="/" style={{textDecoration:"none", color: "black"}}>
                    Clear
                </Link>
            </ClearBtn>
            <ApplyBtn>
                Apply
            </ApplyBtn> <br></br>
            <Input placeholder="Search"></Input>
        </Wrapper>
    )
}

export default Search;