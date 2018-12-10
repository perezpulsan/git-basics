import React, {Component} from "react";

class Product extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
