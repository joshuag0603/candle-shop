import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>Candle Shop</Menu.Item>
        <Menu.Item as={Link} to="../pages/Home.tsx">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="../pages/Products.tsx">
          Products
        </Menu.Item>
        <Menu.Item as={Link} to="../pages/Setting.tsx">
          Settings
        </Menu.Item>
        <Menu.Item as={Link} to="../pages/Cart.tsx">
          Cart
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default NavBar;
