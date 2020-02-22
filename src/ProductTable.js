import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const filterText = props.filterText
  const isStockOnly = props.isStockOnly
  let category;
  const rows = []
  props.products.forEach((product, index) => {
    if (product.category !== category) {
      category = product.category;
      rows.push(<ProductCategoryRow key={index + category} category={category} />);
    }
    if (product.name.toLowerCase().includes(filterText.toLowerCase()) && isStockOnly?product.stocked:true) {
      console.log(product.name)
      rows.push(<ProductRow key={index} product={product}/>);
    }
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
