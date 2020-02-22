import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'ball',
      isStockOnly: true
    }
  }


  render() {
    return (
      <main>
        <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
        <ProductTable products = {this.props.products} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
      </main>
    )
  }
}

export default FilterableProductTable;
