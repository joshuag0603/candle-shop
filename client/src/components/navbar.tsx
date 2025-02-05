import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>Candle Shop</Menu.Item>
        <Menu.Item as={Link} to="../">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="../products">
          Products
        </Menu.Item>
        <Menu.Item as={Link} to="../cart">
          Cart
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default NavBar;
