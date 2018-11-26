import React from 'react'
import { CardDeck, CardImg, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom'

import './ProductItem.scss';

const ProductItem = (props) => {
  return (
    <CardDeck className="product-item p-1">
      <a href="#">
        <CardImg top width="100%" src={props.productImage} alt={props.productName} />
        <CardImgOverlay>
          <CardBody className="p-0">
            <CardTitle className={props.colorTitle}>
              {props.productName.length < 20
                  ? `${props.productName}`
                  : `${props.productName.substring(0, 25)}...`}
            </CardTitle>
          </CardBody> 
        </CardImgOverlay>
      </a>
    </CardDeck>
  )
}

export default ProductItem