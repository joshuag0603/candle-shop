import React, { useState, useEffect } from "react";
import { Container, Header, Card, Image, Loader } from "semantic-ui-react";
import { retrieveProduct } from "../api/productAPI.js";
import type { productInfo } from "../interface/ProductData.js";
import NavBar from "../components/navbar";
import AddToCart from '../components/AddToCart.js'

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<productInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await retrieveProduct();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>
          Our Products
        </Header>
        {loading ? (
          <Loader active inline="centered" size="large">
            Loading Products...
          </Loader>
        ) : (
          <Card.Group itemsPerRow={3} stackable>
            {products.map((product) => (
              <Card key={product.id}>
                {/* Render the product image */}
                <Image
                  src={product.image}
                  wrapped
                  ui={false}
                  alt={product.productName}
                />
                <Card.Content>
                  <Card.Header>{product.productName}</Card.Header>
                  <Card.Meta>
                    <span>Price: ${product.price.toFixed(2)}</span>
                  </Card.Meta>
                  <Card.Description>{product.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <AddToCart productName={product.productName} />
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </Container>
    </>
  );
};

export default ProductsPage;
