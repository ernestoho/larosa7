
export type Screen = 
  | 'SPLASH'
  | 'SIGN_IN' 
  | 'SIGN_UP' 
  | 'FORGOT_PASSWORD' 
  | 'HOME' 
  | 'PRODUCT_DETAIL' 
  | 'ORDERS' 
  | 'CONFIRM_ORDER' 
  | 'ORDER_STATUS';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  calories: string;
  weight: string;
  rating: number;
  ingredients: { name: string; icon: string }[];
}

export interface Order {
  id: string;
  items: string[];
  total: number;
  deliveryTime: string;
  status: string;
  date: string;
  image: string;
}
