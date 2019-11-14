import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-color:  #000;
border-width: 1px 1px 1px 1px;
padding:7px 20px;
`

const Button = styled.button`
border-color:  #000;
border-width: 1px 1px 1px 0px;
background:#f5f6f7;
padding: 7px 10px;
margin:0;
cursor:pointer;
font-weight:700;
&:hover{
background:#ebedf0;

}


`
export const SearchBar = () => {
    return (
        <form>
            <label for="search"></label>
            <Input type="text" name="search" id="search" />
            <Button type="submit" >
                <i className="fas fa-search"></i>
            </Button>
        </form>

    )
}