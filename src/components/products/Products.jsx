import React, { Component } from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import ProductItems from './ProductItems'

class Products extends Component {

  constructor(props){
    super(props)
  }

  state = {
    products: []
  }

  componentDidMount() {
    // axios.get(`http://gigit.store/wp-json/wp/v2/product?_embed`)
    axios.get(`http://dev.wakwaw.com/agogo/wp-json/wp/v2/produk?_embed`)
    .then(res => {
      const products = res.data;
      this.setState({ products });
      sessionStorage.setItem('products', JSON.stringify(products));
      // console.log(products)
    })
  }

  render() {
    // console.log(this.state.products)
    return (
      <Container className="products p-4">
        <ProductItems products={this.state.products} cartStore={this.props.cartStore}  />
      </Container>
    );
  }
}

export default Products;
