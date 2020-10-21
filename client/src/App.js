import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppNavbar />
        <Container className="main">
          <ItemModal />
          <ShoppingList />
        </Container>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
