import React from 'react';

import Products from './containers/Products/Products';
import Navigations from './component/Navigations/Navigations';
import './App.css';

const App =()=>{
  return(
    <div className='App'>
      <Navigations/>
      <Products/>
    </div>
  );
}


export default App;
