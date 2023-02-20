import React from 'react';

import Products from './containers/Products/Products';
import Navigations from './component/Navigation/NavigationItems/NavigationItems';
import classes from './App.module.css';

const App =()=>{
  return(
    <div className={classes.App}>
      <Navigations/>
      <Products/>
    </div>
  );
}


export default App;
