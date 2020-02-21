import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

function FilterableProductTable(props) {
  return (
    <main>
      <SearchBar />
      <ProductTable products = {props.products} />
    </main>
  )
}

export default FilterableProductTable;
