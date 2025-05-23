import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Nav';
import First from './components/Main';
import Second from './components/second';
import Third from './components/Third';
import Footer from './components/footer';

const App = () => {
  return(
    <div>
      
    <Navbar />
    <First />
    <Second />
    <Third />
    <Footer />
    </div>
  )
}
export default App;