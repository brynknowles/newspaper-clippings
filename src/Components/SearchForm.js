import React from 'react'


const SearchForm = (props) => {
    let {searchValue, changeHandler} = props

    return (
        <form>
            <input type="text" value={searchValue} placeholder="search by term" onChange={changeHandler}/>
        </form>
    )
}

export default SearchForm