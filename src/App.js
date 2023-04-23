import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import ItemList from './pages/ItemList';
import SubItemList from './pages/SubItemList';
import LoginForm from './components/LoginForm';
import Anatomy from './pages/Anatomy';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';




function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/sub-items/:itemId" element={ <SubItemList/>}/>
          <Route exact path="/anatomy" element={<Anatomy/>} />
          <Route exact path="/settings" element={<Settings/>} />
          <Route exact path="/itemList" element={<ItemList/>} />
          <Route exact path="*" element={<NotFound/>} />
          {/* <Route exact path="*" element={<PageNotFound/>}/> */}
        </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
