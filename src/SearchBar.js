import React from 'react';

class  SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input type="search" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/><br/>
        <input id="in-stock-only" type="checkbox" checked={this.props.isStockOnly} onChange={this.handleInStockChange}/>
        <label htmlFor="in-stock-only">Only show products in stock</label>
      </form>
    )
  }
}

export default SearchBar;
