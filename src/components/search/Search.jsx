import React from 'react'
import './Search.scss'

const Search = () => {
  return (
    <div class="search">
        <input class="search__field" type="text" placeholder="Search for a recipe" />
        <button class="search__btn">Search</button>
    </div>
  )
}

export default Search