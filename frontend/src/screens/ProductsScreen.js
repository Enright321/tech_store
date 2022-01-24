import React from 'react';
import products from '../data/products';
import { Row, Col, Container } from 'react-bootstrap';
import Products from '../components/Products';

const ProductsScreen = () => {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsScreen;
