import React from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import TotalItemsDisplay from './components/TotalItemsDisplay';

const App: React.FC = () => {

  return (
    <div>
      <AddItemForm />
      <ShoppingList />
      <TotalItemsDisplay  />
    </div>
  );
}

export default App;
