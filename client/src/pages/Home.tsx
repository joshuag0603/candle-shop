import React from "react";
import NavBar from "../components/navbar";
import { productInfo } from "../interface/ProductData";
import { Container, Header, Card, Image } from "semantic-ui-react";
import AddToCart from "../components/AddToCart";

const Home: React.FC = () => {
  const products: productInfo[] = [
    {
      id: "1",
      productName: "Tonka & Oud",
      description:
        "This is a deep, warm smell that combines tonka and leather with oud and smoke. It has light spicy notes, too, and a base of amber. This fragrance might remind you of a campfire on a desert evening.",
      image: "/images/Tonka&Oud.jpg",
      price: 12.99,
      quantity: 10,
    },
    {
      id: "2",
      productName: "Frasier Fir",
      description:
        "The gorgeous design on this candle and the fresh, woodsy scent of Frasier Fir bring memories of Christmas tree farms and snow flurries.",
      image: "/images/Frasier_Fir.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: "3",
      productName: "Peppermint Mocha",
      description:
        "This candle carries a warm, subtle and soft scent reminiscent of a vanilla latte, milk chocolate and Peppermint Patties.",
      image: "/images/peppermint_mocha.png",
      price: 9.99,
      quantity: 10,
    },
  ];

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>
          Welcome to Our Candle Shop
        </Header>
        <Header as="h2" dividing style={{ marginTop: "2em" }}>
          Our Best Sellers 
        </Header>
        <Card.Group itemsPerRow={3} stackable>
          {products.map((product) => (
            <Card key={product.id}>
              <Image
                src={product.image}
                wrapped
                ui={false}
                alt={product.productName}
              />
              <Card.Content>
                <Card.Header>{product.productName}</Card.Header>
                <Card.Meta>
                  <span className="date">Price: ${product.price.toFixed(2)}</span>
                </Card.Meta>
                <Card.Description>{product.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
              <AddToCart productName={product.productName} />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </>
  );
};

export default Home;
