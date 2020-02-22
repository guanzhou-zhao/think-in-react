import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <input type="search" placeholder="Search..." value={props.filterText}/><br/>
      <input id="in-stock-only" type="checkbox" checked={props.isStockOnly}/>
      <label htmlFor="in-stock-only">Only show products in stock</label>
    </form>
  )
}

export default SearchBar;
