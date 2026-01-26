import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const dataWine = [
  {
    "id": 1,
    "name": "Sauska Cabernet Sauvignon",
    "type": "red wine",
    "description": "Full-bodied red wine with rich aroma and balanced tannins.",
    "taste": "sweet",
    "year": 2024,
    "price": 3800,
    "alcoholContent": 14,
    "wineryId": 1,
    "grapes": [
      { "id": 1, "name": "Cabernet Sauvignon", "color": "red" }
    ]
  },
  {
    "id": 2,
    "name": "Gere Villányi Franc",
    "type": "red wine",
    "description": "Elegant and spicy red wine with long finish.",
    "taste": "dry",
    "year": 2022,
    "price": 4200,
    "alcoholContent": 13.5,
    "wineryId": 2,
    "grapes": [
      { "id": 2, "name": "Cabernet Franc", "color": "red" }
    ]
  },
  {
    "id": 3,
    "name": "Bock Ermitage",
    "type": "red wine",
    "description": "Premium blend with deep structure and aging potential.",
    "taste": "dry",
    "year": 2021,
    "price": 8900,
    "alcoholContent": 14.5,
    "wineryId": 3,
    "grapes": [
      { "id": 2, "name": "Cabernet Franc", "color": "red" },
      { "id": 1, "name": "Cabernet Sauvignon", "color": "red" }
    ]
  },
  {
    "id": 4,
    "name": "Tokaji Aszú 5 Puttonyos",
    "type": "dessert wine",
    "description": "Sweet wine with honey and apricot notes.",
    "taste": "semi-sweet",
    "year": 2018,
    "price": 10500,
    "alcoholContent": 11,
    "wineryId": 4,
    "grapes": [
      { "id": 3, "name": "Furmint", "color": "white" }
    ]
  },
  {
    "id": 5,
    "name": "Szent Tamás Furmint",
    "type": "white wine",
    "description": "Mineral-driven white wine from Tokaj.",
    "taste": "dry",
    "year": 2023,
    "price": 3600,
    "alcoholContent": 13,
    "wineryId": 4,
    "grapes": [
      { "id": 3, "name": "Furmint", "color": "white" }
    ]
  },
  {
    "id": 6,
    "name": "Kreinbacher Brut Classic",
    "type": "sparkling wine",
    "description": "Fresh and elegant Hungarian sparkling wine.",
    "taste": "dry",
    "year": 2022,
    "price": 4500,
    "alcoholContent": 12,
    "wineryId": 5,
    "grapes": [
      { "id": 4, "name": "Chardonnay", "color": "white" }
    ]
  },
  {
    "id": 7,
    "name": "Figula Olaszrizling",
    "type": "white wine",
    "description": "Crisp Balatonfüred white wine with almond notes.",
    "taste": "dry",
    "year": 2023,
    "price": 2900,
    "alcoholContent": 12.5,
    "wineryId": 6,
    "grapes": [
      { "id": 5, "name": "Olaszrizling", "color": "white" }
    ]
  },
  {
    "id": 8,
    "name": "St. Andrea Nagy-Eged Bikavér",
    "type": "red wine",
    "description": "Complex Egri Bikavér with dark fruit aromas.",
    "taste": "semi-dry",
    "year": 2021,
    "price": 5200,
    "alcoholContent": 13.8,
    "wineryId": 7,
    "grapes": [
      { "id": 6, "name": "Kékfrankos", "color": "red" },
      { "id": 7, "name": "Merlot", "color": "red" }
    ]
  },
  {
    "id": 9,
    "name": "Vylyan Rosé",
    "type": "rosé wine",
    "description": "Fresh and fruity rosé for summer evenings.",
    "taste": "dry",
    "year": 2024,
    "price": 2500,
    "alcoholContent": 12,
    "wineryId": 8,
    "grapes": [
      { "id": 7, "name": "Merlot", "color": "red" }
    ]
  },
  {
    "id": 10,
    "name": "Laposa Kéknyelű",
    "type": "white wine",
    "description": "Rare Hungarian variety with volcanic minerality.",
    "taste": "semi-dry",
    "year": 2022,
    "price": 4700,
    "alcoholContent": 13,
    "wineryId": 9,
    "grapes": [
      { "id": 8, "name": "Kéknyelű", "color": "white" }
    ]
  }
]


export type Wine = {
  id: number,
  name: string,
  type: string,
  description: string,
  taste: string,
  year: number,
  price: number,
  alcoholContent: number,
  wineryId: number,
  grapes: {
    id: number,
    name: string,
    color: string,
  }[],
};

export type WineContextType = {
  wines: Wine[];
  currentWineId: number | null; 
  setCurrentWineId: (id: number | null) => void;
  cart: Wine[];
  setCartItems: React.Dispatch<React.SetStateAction<Wine[]>>;
};

export const WineContext = createContext<WineContextType>({ wines: [], currentWineId: null, setCurrentWineId: () => {}, cart: [], setCartItems: () => {} });

export function WineContextProvider({ children }: { children: React.ReactNode }) {
  const [datas, setDatas] = useState([]);
  const [currentWineId, setCurrentWineId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<Wine[]>([])

  useEffect(() => { 
    async function fetchData() { 
      const response = await axios.get("IDE_JÖN_A_API_URL"); 
      setDatas(response.data); 
    } 
    fetchData(); 
  }, []);

  return (
    <WineContext.Provider value={{ wines: dataWine, currentWineId, setCurrentWineId, cart: cartItems, setCartItems}}>
      {children}
    </WineContext.Provider>
  )
}

export default WineContextProvider