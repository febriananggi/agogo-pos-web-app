import React from 'react'
import ProductItem from './ProductItem';
import { Row, Col } from 'reactstrap';

const ProductItems = (props) => {
  return (
    <Row className="ProductItems row">
      <Col xs="12">
        <Row>
          { props.products.map((product, index) => 
          <Col xs="4">
            <ProductItem 
              productIndex = {index}
              productID={product.id} 
              productName={product.title.rendered} 
              // productImage={product._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} 
              productImage={product.gambar.guid} 
              colorTitle="text-white"
            />
          </Col>
          )}
          { props.products.map((product, index) => 
          <Col xs="4">
            <ProductItem 
              productIndex = {index}
              productID={product.id} 
              productName={product.title.rendered} 
              productImage={product.gambar.guid} 
              colorTitle="text-white"
            />
          </Col>
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default ProductItems