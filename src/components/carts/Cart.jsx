import React, { Component } from 'react';
import { Table, Container, Button } from 'reactstrap';

import './Cart.scss';

class Cart extends Component {

  state = {
    cart: []
  }

  render() {
    return (
      <Container className="cart mt-4 pt-5 pr-0 pb-5 mb-5 pl-0">
        <Table borderless>
          <thead>
            <tr>
              <th className="header item-name">ITEMS(s)</th>
              <th className="header item-delete"></th>
              <th className="header item-qty text-center">JML</th>
              <th className="header item-price text-right">HARGA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Muffins</th>
              <td className="item-delete text-right">
                <i class="fas fa-backspace" />
              </td>
              <td className="text-center">
                <Button color="danger" size="sm">3</Button>
              </td>
              <td className="text-right">33.000</td>
            </tr>
            <tr>
              <th scope="row">Donat Salju</th>
              <td className="item-delete text-right">
                <i class="fas fa-backspace" />
              </td>
              <td className="text-center">
                <Button color="danger" size="sm">1</Button>
              </td>
              <td className="text-right">10.000</td>
            </tr>
            <tr>
              <th scope="row">Kue Apem Melempem</th>
              <td className="item-delete text-right">
                <i class="fas fa-backspace" />
              </td>
              <td className="text-center">
                <Button color="danger" size="sm">7</Button>
              </td>
              <td className="text-right">49.000</td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="cart-subtotal">
              <td scope="row">Sub Total</td>
              <td className="subtotal-price">92.000</td>
            </tr>
            <tr className="cart-subtotal">
              <td scope="row">Biaya Tambahan</td>
              <td className="subtotal-price">0</td>
            </tr>
            <tr className="cart-subtotal">
              <td scope="row">Diskon</td>
              <td className="subtotal-price">0</td>
            </tr>
            <tr className="table-spacer"><td>&nbsp;</td></tr>
            <tr className="cart-total">
              <th className="header">Sisa Pembayaran</th>
              <th className="header text-right">Rp. 92.000</th>
            </tr>
          </tfoot>
        </Table>
      </Container>
    );
  }
}

export default Cart;