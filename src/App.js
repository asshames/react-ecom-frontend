import React from 'react';

import Product from './containers/Product/Product';
import Navigations from './components/Navigations/Navigations';
import './App.css';

const App =()=>{
  return(
    <div className='App'>
      <Navigations/>
      <Product/>
    </div>
  );
}


export default App;
