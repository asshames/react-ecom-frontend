import React from 'react';

import Products from './containers/Products/Products';
import Navigations from './component/Navigations/Navigations';
import classes from './App.css';

const App =()=>{
  return(
    <div className="classes.App">
      <Navigations/>
      <Products/>
    </div>
  );
}


export default App;
