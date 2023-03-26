import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import AddClient from './components/clients/AddClient';
import ClientList from './components/clients/ClientList';
import ProductItem from './components/products/ProductItem';

function App() {
  return (
    <div className='parasaliha'>
      <NavBar />
      
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/addClient' element={<AddClient/>} />
        <Route path='/clientList' element={<ClientList/>} />
        <Route path='/productItem' element={<ProductItem/>} />
      </Routes>
    </div>
  );
}

export default App;
