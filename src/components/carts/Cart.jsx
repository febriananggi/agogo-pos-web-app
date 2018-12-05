import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import ShadowScrollbars from '../scrollbars/ShadowScrollbars';

import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

import './Cart.scss';


class Cart extends Component {
  constructor(props){
    super(props)
  }

  state = {
    cart: [],
    footerNvaBarHeight: 350,
    windowInnerHeight: 0,
    productItemsHeight: 0,
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
    return (
      <Container className="cart mt-4 pt-5 pr-0 pl-0">
          <Table borderless striped>
            <CartHeader cartStore={this.props.cartStore} />
          </Table>

          <ShadowScrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={100}
            autoHeightMax={this.state.productItemsHeight}
          >
            <div className="scroll-wrapper">
              <Table borderless striped className="mb-0">
                <CartItems cartStore={this.props.cartStore} />
              </Table>
            </div>
          </ShadowScrollbars>

          <Table borderless striped>
            <CartTotal cartStore={this.props.cartStore} />
          </Table>
      </Container>
    );
  }
}

export default Cart;