import React from 'react';
import { Card } from 'react-bootstrap';

const Products = ({ product }) => {
  return (
    <a href={`/products/${product._id}`}>
      <Card className='m-3 p-3 rounded'>
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
          <Card.Title as='div'>
            <strong>{product.category}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Products;
