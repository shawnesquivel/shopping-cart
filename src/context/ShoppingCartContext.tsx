import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
// Step 1: Create context w/ init value
const ShoppingCartContext = createContext({});

// Exportable function to use in any component
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// Step 2: Wrap the component with the provider, so the child can use the value
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
