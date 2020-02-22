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

    this.onFilterTextChange = this.onFilterTextChange.bind(this)
    this.onInStockChange = this.onInStockChange.bind(this)
  }

  onFilterTextChange(filterText) {
    this.setState({
      filterText
    })
  }

  onInStockChange(checked) {
    this.setState({
      isStockOnly: checked
    })
  }

  render() {
    return (
      <main>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.onFilterTextChange}
          onInStockChange={this.onInStockChange}/>
        <ProductTable
          products = {this.props.products}
          filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
      </main>
    )
  }
}

export default FilterableProductTable;
