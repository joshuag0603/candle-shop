import React, { useState, useEffect } from "react";
import { Container, Header, Card, Loader } from "semantic-ui-react";
import type { productInfo } from "../interface/ProductData.js";
import CandleCard from "../components/candlecard";
import { retrieveCartItems } from "../api/cartAPI.js";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<productInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const data = await retrieveCartItems();
      if (Array.isArray(data) && data.length > 0) {
        setCartItems(data);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ marginTop: "7em" }}>
      <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>
        Your Cart
      </Header>
      {loading ? (
        <Loader active inline="centered" size="large">
          Loading Cart...
        </Loader>
      ) : cartItems.length === 0 ? (
        <Header as="h3" textAlign="center">
          Your cart is empty.
        </Header>
      ) : (
        <Card.Group itemsPerRow={3} stackable>
          {cartItems.map((item) => (
            <CandleCard key={item.id} candle={item} />
          ))}
        </Card.Group>
      )}
    </Container>
  );
};

export default CartPage;
