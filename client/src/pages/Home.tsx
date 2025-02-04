import React, { useState } from "react";
import navBar from "../components/navbar";
import PictureAndQuote from "../components/PictureQuote";
import Contact from "../components/contact";
import { productInfo } from "../interface/ProductData";
import { contactInfo } from "../interface/contactInfo";

const Home: React.FC = () => {
  const products: ProductInfo[] = [
    {
      id: "1",
      productName: "Peppermint",
      description: " ",
      price: 15,
      quantity: 20,
    },
    {
      id: "2",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "3",
      productName: "Whiskey Scented Candle",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "4",
      productName: "Caramel Popcorn",
      description: " ",
      price: 13,
      quantity: 15,
    },

    {
      id: "5",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "6",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "7",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "8",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "9",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
    {
      id: "10",
      productName: "Hot Apple Pie",
      description: " ",
      price: 13,
      quantity: 15,
    },
  ];
  const [contact] = useState<contactInfo>({
    email: "support@candleshop.com",
    phoneNumber: "123-456-7890",
  }); 

  return (
    <>
      <NavBar />
      <h1>Welcome to Our Candle Shop</h1>
      <PictureAndQuote
        imageSrc="https://via.placeholder.com/400"
        altText="Inspirational Image"
        quote="The best way to predict the future is to create it."
        author="Peter Drucker"
      />
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.quantity}</p>
          </li>
        ))}
      </ul>
      <Contact contact={contact} />
    </>
  );
};

export default Home;
