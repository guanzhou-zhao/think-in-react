import React from 'react';

function ProductCategoryRow(props) {
  return (
    <tr>
      <td colSpan="2"><span style={{'fontWeight':'bold'}}>{props.category}</span></td>
    </tr>
  )
}

export default ProductCategoryRow;
