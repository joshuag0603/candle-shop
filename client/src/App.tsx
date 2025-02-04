// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/navbar'; // or adjust the path as needed

const Home: React.FC = () => <div><h1>Home Page</h1></div>;
const Products: React.FC = () => <div><h1>Products Page</h1></div>;
const Settings: React.FC = () => <div><h1>Settings</h1></div>;
const Cart: React.FC = () => <div><h1>Cart</h1></div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        {/* Replace or add correct routes for About and Contact if they exist */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
};

export default App;

