import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

  let category;
  const rows = []
  props.products.forEach((product, index) => {
    if (product.category !== category) {
      category = product.category;
      rows.push(<ProductCategoryRow key={index + category} category={category} />);
    }
    rows.push(<ProductRow key={index} product={product}/>);

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
