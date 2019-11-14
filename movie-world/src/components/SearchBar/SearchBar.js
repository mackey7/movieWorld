import React from 'react'

export const SearchBar = () => {
    return (
        <form>
            <label for="search"></label>
            <input type="text" name="search" id="search" />
            <button type="submit" >
                <i className="fas fa-search"></i>
            </button>
        </form>

    )
}