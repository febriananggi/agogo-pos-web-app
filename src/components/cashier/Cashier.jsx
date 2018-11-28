import React, { Component } from 'react';
import axios from 'axios'
import { Container, Row, Col, Nav, NavItem, NavLink, Input } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Products from '../products/Products'
import ProductCategories from '../products/ProductCategories'
import Cart from '../carts/Cart'

import './Cashier.scss';

class Kasir extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  re

  render() {
    return (
      <Container fluid="true" className="kasir container-fluid h-100">
        <Row className="h-100">

          <Col xs="6" className="kasir-cart">
            <Row className="cart-header no-gutters">
              <Col xs="12">
                <Navbar expand="md">
                  <NavbarBrand href="/" className="ml-4"><i className="fas fa-user-alt mr-1"></i> Hapsa</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/pemesanan">Order #TK-1800000014</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/logout" className="navbar-close"><i className="fas fa-times"></i></NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>

            <Row className="cart-list no-gutters">
              <Col xs="12">
                <Cart />
              </Col>
            </Row>


            <Row className="cart-nav no-gutters">
              <Col xs="12">
                <Navbar expand="md">
                  <NavbarBrand className="ml-4 mr-0">
                    <Input className="cart-nav-input mr-2" type="input" name="qrcode" id="productQRCode" placeholder="QR Code ..." />
                    <Input className="cart-nav-input" type="number" name="qrcodeQty" id="productQRCodeQty" placeholder="0" />
                  </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/refund"><i className="fas fa-folder-open"></i><br />Buka Trx</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/pemesanan"><i className="fas fa-save"></i><br />Simpan</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/logout"><i className="fas fa-coins"></i><br/>Bayar</NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </Col>

          <Col xs="6" className="kasir-product">
            <Row className="no-gutters">
              <Col xs="9">
                <Products />
              </Col>
              <Col xs="3">
                <ProductCategories />
              </Col>
            </Row>

            <Row className="product-nav no-gutters">
              <Col xs="12">
                <Navbar expand="md">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/refund"><i className="fas fa-retweet"></i><br />Refund</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/pemesanan"><i className="fas fa-edit"></i> <br />Pemesanan</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/logout"><i className="fas fa-sign-out-alt"></i> <br />Sign Out</NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Kasir;