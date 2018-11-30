import React from 'react'
import { CardDeck, CardImg, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';

import './ProductItem.scss';

const ProductItem = (props) => {
  return (
    <CardDeck className="product-item p-1">
      {/* idx, id, name, qty, price */}
      <a href="#" onClick={() => props.cartStore.addSelectedProduct(props.productIndex, props.productID, props.productName, props.productQty, props.productPrice)}>
        <CardImg top width="100%" src={props.productImage} alt={props.productName} />
        <CardImgOverlay>
          <CardBody className="p-0">
            <CardTitle className={props.colorTitle}>
              {props.productName.length < 20
                  ? `${props.productName}`
                  : `${props.productName.substring(0, 25)}...`}
              <div><em><small>Rp {props.productPrice}</small></em></div>
            </CardTitle>
          </CardBody> 
        </CardImgOverlay>
      </a>
    </CardDeck>
  )
}

export default ProductItem