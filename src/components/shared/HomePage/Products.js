import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  const style ={
        color: 'Indigo'
      }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://evening-river-57363.herokuapp.com/products").then((res) =>
      setProducts(res.data.slice(2,8))
    );
  }, []);
  return (
    <Container>
      <h1 className="text-center m-4" style={style}> Our New Collection</h1>
      <Row className=" g-3">
        {products.map((product) => (
          <Col lg={4} kew={product._id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                className="h-75 img-fluid"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <small>By {product.brand}</small>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>${product.price}</Card.Title>
                <p>
                  <small>{product.order} Ordered</small>
                </p>
                <Link to={`/order/${product._id}`}>
                  <Button variant="danger">Add to cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
