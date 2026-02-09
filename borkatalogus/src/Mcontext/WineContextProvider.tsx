import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom';


export type Wine = {
  id: number,
  name: string,
  type: string,
  description: string,
  taste: string,
  year: number,
  price: number,
  alcoholContent: number,
  url: string,
  fileId: string,
  wineryId: number,
  grapes: {
    id: number,
    name: string,
    color: string,
  }[],
  reviews: {
    id: number;
    name: string;
    rating: number;
    comment: string;
  }[],
};

export type WineContextType = {
  wines: Wine[];
  currentWineId: number | null;
  setCurrentWineId: (id: number | null) => void;
  cart: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export type CartItem = {
  wine: Wine;
  quantity: number;
};

export const BaseUrl = "https://48ph6jzb-7072.euw.devtunnels.ms"

export const WineContext = createContext<WineContextType>({ wines: [], currentWineId: null, setCurrentWineId: () => { }, cart: [], setCartItems: () => { } });

export function WineContextProvider({ children }: { children: React.ReactNode }) {

  const [datas, setDatas] = useState<Wine[]>([]);
  const [currentWineId, setCurrentWineId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem("discount");
      localStorage.removeItem("discountCode");
    }
  }, [cartItems]);


  async function fetchData() {
    try {
      const response = await axios.get(`${BaseUrl}/api/wine`);
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WineContext.Provider value={{ wines: datas, currentWineId, setCurrentWineId, cart: cartItems, setCartItems }}>
      {children}
    </WineContext.Provider>
  )
}

export default WineContextProvider