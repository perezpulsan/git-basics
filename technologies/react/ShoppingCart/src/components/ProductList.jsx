import React, {Component} from "react";
import Product from "./Product";
class ProductList extends Component {
  render() {
    return (
      <ul class="product-list list-group">
        <Product />
        <Product />
        <Product />
      </ul>
    );
  }
}

export default ProductList;
