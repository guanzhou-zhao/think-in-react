import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const filterText = props.filterText
  const isStockOnly = props.isStockOnly
  let lastCategory;
  const rows = []
  props.products.forEach((product, index) => {
    if (!product.name.includes(filterText)) {
      return;
    }
    if (isStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={index + product.category} category={product.category} />);
    }
    rows.push(<ProductRow key={index} product={product}/>);
    lastCategory = product.category;

  });

  return (
    <table>
      <thead>
        <tr>
          <th style={{'textAlign':'left'}}>Name</th>
          <th style={{'textAlign':'left'}}>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;
