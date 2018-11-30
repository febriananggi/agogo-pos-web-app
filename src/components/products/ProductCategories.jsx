import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Input } from 'reactstrap';

import './ProductCategories.scss';

class ProductCategories extends Component {

  state = {
    categories: [
      {
        "id": 0,
        "title": "Semua Item",
      },
      {
        "id": 1,
        "title": "Roti"
      },
      {
        "id": 2,
        "title": "Cake"
      },
      {
        "id": 3,
        "title": "Kue Basah"
      },
      {
        "id": 4,
        "title": "Brownies"
      },
      {
        "id": 5,
        "title": "Cake Slices"
      },
      {
        "id": 6,
        "title": "Black Forrest"
      },
      {
        "id": 7,
        "title": "Sponge"
      }
    ]
  }

  render() {
    // console.log(this.state.categories)
    return (
      <Nav className="product-categories pt-4 pb-4 pr-3">
        <NavItem>
          <Input type="search" name="search" id="productSearch" placeholder="Cari produk..." />
        </NavItem>
        { this.state.categories.map((cat, index) => 
          <NavItem key={index}>
            <NavLink href="#">{cat.title}</NavLink>
          </NavItem>
        )}
      </Nav>
    );
  }
}

export default ProductCategories;
