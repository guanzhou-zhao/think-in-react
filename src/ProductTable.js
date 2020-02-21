import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

  let category;
  const rows = []
  props.products.forEach(product => {
    if (product.category !== category) {
      category = product.category;
      rows.push(<ProductCategoryRow category={category} />);
    }
    rows.push(<ProductRow product={product}/>);

  });


  return (
    <table>
      <thead>
        <tr>
          <th style={{'text-align':'left'}}>Name</th>
          <th style={{'text-align':'left'}}>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;
