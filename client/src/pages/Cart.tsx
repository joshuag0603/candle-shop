import React, { useState, useEffect } from "react";
import { Container, Header, Card, Loader, Image } from "semantic-ui-react";
import type { productInfo } from "../interface/ProductData";
import { retrieveCartItems } from "../api/cartAPI";
import NavBar from "../components/navbar";

interface GroupedCartItem extends productInfo {
  totalQuantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<productInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const data = await retrieveCartItems();
      console.log("Retrieved cart items:", data);
      setCartItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Group items by productName (assuming items with the same productName are identical)
  const groupedCartItems: GroupedCartItem[] = Object.values(
    cartItems.reduce((acc, item) => {
      const key = item.productName;
      if (acc[key]) {
        acc[key].totalQuantity += item.quantity;
      } else {
        acc[key] = { ...item, totalQuantity: item.quantity };
      }
      return acc;
    }, {} as { [key: string]: GroupedCartItem })
  );

  // Convert the price to a number and calculate the total cost.
  const totalCost = groupedCartItems.reduce((acc, item) => {
    const priceNumber = Number(item.price) || 0;
    return acc + (priceNumber * item.totalQuantity);
  }, 0);

  // Use a fallback for image:
  // Check if item.image exists; if not, try item.imageUrl; otherwise, use the placeholder.
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <>
    <NavBar />
    <Container style={{ marginTop: "7em" }}>
      <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>
        Your Cart
      </Header>
      {loading ? (
        <Loader active inline="centered" size="large">
          Loading Cart...
        </Loader>
      ) : groupedCartItems.length === 0 ? (
        <Header as="h3" textAlign="center">
          Your cart is empty.
        </Header>
      ) : (
        <>
          <Card.Group itemsPerRow={3} stackable>
            {groupedCartItems.map((item, index) => {
              const priceNumber = Number(item.price) || 0;
              const imageSrc = item.image || placeholderImage;
              return (
                <Card key={`${item.productName}-${index}`}>
                  <Image
                    src={imageSrc}
                    wrapped
                    ui={false}
                    alt={item.productName}
                  />
                  <Card.Content>
                    <Card.Header>{item.productName}</Card.Header>
                    <Card.Meta>
                      <span>Unit Price: ${priceNumber.toFixed(2)}</span>
                    </Card.Meta>
                    <Card.Description>
                      Quantity: {item.totalQuantity}
                    </Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
          <Header as="h2" textAlign="center" style={{ marginTop: "2em" }}>
            Total Cost: ${totalCost.toFixed(2)}
          </Header>
        </>
      )}
    </Container>
    </>
  );
};

export default CartPage;
