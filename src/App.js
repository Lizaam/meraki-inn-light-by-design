import React, { createContext, useState } from 'react';
import NavigationComponent from './scripts/components/navigation/navigation.component';

export const ProductsInfoContext = createContext();
export const ActiveNavItemContext = createContext();

const App = () => {
  const [ productInfo, productInfoState ] = useState({});
  const [ navItem, navItemState ] = useState('nav-item-home');

  return (
    <ProductsInfoContext.Provider value={[ productInfo, productInfoState ]}>
      <ActiveNavItemContext.Provider value={[ navItem, navItemState ]}>
        <NavigationComponent />
      </ActiveNavItemContext.Provider>
    </ProductsInfoContext.Provider>
  );
};
 
export default App;