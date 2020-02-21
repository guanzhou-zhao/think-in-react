import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <input type="search" placeholder="Search..."/><br/>
      <input id="in-stock-only" type="checkbox" />
      <label for="in-stock-only">Only show products in stock</label>
    </form>
  )
}

export default SearchBar;
