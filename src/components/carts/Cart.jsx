import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';

import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

import './Cart.scss';

class Cart extends Component {
  constructor(props){
    super(props)
  }

  state = {
    cart: []
  }

  render() {
    return (
      <Container className="cart mt-4 pt-5 pr-0 pb-5 mb-5 pl-0">
        <Table borderless striped>
          
          <CartHeader cartStore={this.props.cartStore} />

          <CartItems cartStore={this.props.cartStore} />

          <CartTotal cartStore={this.props.cartStore} />
          
        </Table>
      </Container>
    );
  }
}

export default Cart;