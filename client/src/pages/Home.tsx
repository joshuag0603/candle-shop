import React from "react";
import NavBar from "../components/navbar.js";
import PictureAndQuote from "../components/PictureQuote.js";
// import Contact from "../components/contact.js";
import { productInfo } from "../interface/ProductData.js";
// import { contactInfo } from "../interface/contactInfo.js";

const Home: React.FC = () => {
  const products: productInfo[] = [
    {
      id: "1",
      productName: "Tonka & Oud",
      description:
        "This is a deep, warm smell that combines tonka and leather with oud and smoke. It has light spicy notes, too, and a base of amber. This fragrance might remind you of a campfire on a desert evening.",
      image: "./images/Tonka&Oud.jpg",
      price: 12.99,
      quantity: 10,
    },
    {
      id: "2",
      productName: "Frasier Fir",
      description:
        "The gorgeous design on this candle and the fresh, woodsy scent of Frasier Fir bring memories of Christmas tree farms and snow flurries",
      image: "./images/Frasier_Fir.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: "3",
      productName: "Vanilla Eggnog",
      description:
        "Heavy on amaretto and rum, this creamy scent has an added dash of vanilla, butter, and sugar for a rich and delicious gourmand candle.",
      image: "./images/Vanilla_Eggnog.jpg",
      price: 15.99,
      quantity: 10,
    },
    {
      id: "4",
      productName: "Peppermint Mocha",
      description:
        "This candle carries a warm, subtle and soft scent reminiscent of a vanilla latte, milk chocolate and Peppermint Patties.",
      image: "./images/peppermint_mocha.png",
      price: 9.99,
      quantity: 10,
    },
  ];

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
            <img src={product.image} alt={product.productName} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
