import React, { useState } from 'react';
import { Screen, Product } from './types.ts';
import SplashScreen from './screens/SplashScreen.tsx';
import SignInScreen from './screens/SignInScreen.tsx';
import SignUpScreen from './screens/SignUpScreen.tsx';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.tsx';
import HomeScreen from './screens/HomeScreen.tsx';
import ProductDetailScreen from './screens/ProductDetailScreen.tsx';
import OrdersScreen from './screens/OrdersScreen.tsx';
import ConfirmOrderScreen from './screens/ConfirmOrderScreen.tsx';
import OrderStatusScreen from './screens/OrderStatusScreen.tsx';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (screen: Screen, product?: Product) => {
    if (product) setSelectedProduct(product);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    const content = (() => {
      switch (currentScreen) {
        case 'SPLASH':
          return <SplashScreen onComplete={() => navigateTo('SIGN_IN')} />;
        case 'SIGN_IN':
          return <SignInScreen onNavigate={navigateTo} />;
        case 'SIGN_UP':
          return <SignUpScreen onNavigate={navigateTo} />;
        case 'FORGOT_PASSWORD':
          return <ForgotPasswordScreen onNavigate={navigateTo} />;
        case 'HOME':
          return <HomeScreen onNavigate={navigateTo} />;
        case 'PRODUCT_DETAIL':
          return selectedProduct ? (
            <ProductDetailScreen product={selectedProduct} onNavigate={navigateTo} />
          ) : (
            <HomeScreen onNavigate={navigateTo} />
          );
        case 'ORDERS':
          return <OrdersScreen onNavigate={navigateTo} />;
        case 'CONFIRM_ORDER':
          return <ConfirmOrderScreen onNavigate={navigateTo} />;
        case 'ORDER_STATUS':
          return <OrderStatusScreen onNavigate={navigateTo} />;
        default:
          return <HomeScreen onNavigate={navigateTo} />;
      }
    })();

    return <div className="screen-fade-in h-full w-full relative">{content}</div>;
  };

  return (
    <div className="w-full h-full bg-[#FFF5E1] flex flex-col overflow-hidden">
      {/* iOS Status Bar / Notch Spacer */}
      <div className="h-12 w-full bg-transparent flex-shrink-0"></div>
      
      {/* Screen Content */}
      <main className="flex-grow w-full relative overflow-hidden">
        {renderScreen()}
      </main>

      {/* iOS Home Indicator Spacer */}
      <div className="h-6 w-full bg-transparent flex-shrink-0"></div>
    </div>
  );
};

export default App;