import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Input = styled.input`
border-color:  #000;
border-width: 1px 1px 1px 1px;
padding:7px 20px;
width:350px;
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
class SearchBar extends Component {


    state = {
        searchValue: ""
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    reload = () => {
        setTimeout(function () { window.location.reload(true); }, 100);

    }
    render() {
        { console.log(window) }
        return (
            <form>
                <label for="search"></label>
                <Input type="text" name="search" id="search" value={this.state.searchValue} onChange={this.handleChange} />
                <Link to={`/search/${this.state.searchValue}`}  >
                    <Button  >
                        <i className="fas fa-search">
                        </i>
                    </Button>
                </Link>

            </form>

        )
    }
}
export default SearchBar