import React, { Component } from 'react';
import axios from 'axios'
import ShadowScrollbars from '../scrollbars/ShadowScrollbars';
import { Container } from 'reactstrap';
import ProductItems from './ProductItems'

import "./Products.scss";


class Products extends Component {

  constructor(props){
    super(props)
  }

  state = {
    products: [],
    footerNvaBarHeight: 114,
    windowInnerHeight: 0,
    productItemsHeight: 0,
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

  componentWillMount(){
    this.setState({
      windowInnerHeight: window.innerHeight
    },
      () => {
        this.setState({
          productItemsHeight: this.state.windowInnerHeight - this.state.footerNvaBarHeight
        })
      }
    );
  }

  render() {
    // console.log(this.state.products)
    return (
      <Container className="products pt-4 pl-0 pr-0">

        <ShadowScrollbars
          // This will activate auto-height
          autoHeight
          autoHeightMin={100}
          autoHeightMax={this.state.productItemsHeight}
          isBlack
        >
          <ProductItems products={this.state.products} cartStore={this.props.cartStore}  />
        </ShadowScrollbars>

      </Container>
    );
  }
}

export default Products;
