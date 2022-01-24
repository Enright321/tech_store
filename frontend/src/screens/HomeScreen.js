import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import categories from '../data/categories';
import Categories from '../components/Categories';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <h1>Top Categories</h1>
        <Row>
          {categories.map((category) => (
            <Col key={category._id} sm={12} md={6} lg={4} xl={4}>
              <Categories category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
