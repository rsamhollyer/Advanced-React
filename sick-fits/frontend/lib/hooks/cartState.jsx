/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

export function CartStateProvider({ children }) {
  // Custom provider. We'll store state and functionaliy in here and anyone can access it via the consumer
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, openCart, closeCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

// Custom hook to access cart local state

export function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}
