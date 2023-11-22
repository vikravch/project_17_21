import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import ShopPage from "./modules/shop-page/presentation/pages/ShopPage";
import CartPage from "./modules/cart/pages/cart-page";
import CheckoutPage from "./modules/cart/pages/checkout-page";
import HomePage from "./modules/home_page/presentation/page/HomePage";

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            {/*<NavigationRow/>*/}
            <main style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/" element={<WeatherPage/>}/>
                    <Route path="shop" element={<ShopPage/>}/>
                    <Route element={<WeatherPage/>}/>{/*default route*/}
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/cart/checkout" element={<CheckoutPage/>}/>
                </Routes>
            </main>
            {/*<NewsletterSubscribe/>*/}
            {/*<Footer/>*/}
        </div>

    );
}

export default App;
