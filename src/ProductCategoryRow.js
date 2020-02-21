import React from 'react';

function ProductCategoryRow(props) {
  return (
    <tr>
      <td colspan="2"><span style={{'font-weight':'bold'}}>{props.category}</span></td>
    </tr>
  )
}

export default ProductCategoryRow;
