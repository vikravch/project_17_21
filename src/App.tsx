import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/presentation/components/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import ShopWrapper from "./modules/shop-page/presentation/pages/ShopWrapper";
import Blog from "./modules/blog/page/Blog";
import CartPage from "./modules/cart/presentation/pages/cart-page";
import CheckoutPage from "./modules/cart/presentation/pages/checkout-page";
import CompletePage from "./modules/cart/presentation/pages/complete-page";
import Account from "./modules/account/pages/Account";
import HomePage from './modules/home_page/presentation/page/HomePage';
import Article from "./modules/blog/presentation/components/Article/Article";
import ShopPage from './modules/shop-page/presentation/pages/ShopPage';
import SearchPage from "./modules/shop-page/presentation/pages/SearchPage";
import Product from "./modules/product_page/presentation/components/Product";
import {AuthIn} from "./modules/sign/form-in/auth-form-in";
import {AuthUp} from "./modules/sign/form-up/auth-form-up";
import {ForgotPassword} from "./modules/sign/forgot-password/forgotPassword";

function App() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Перемещение скролла в верхнюю часть страницы при изменении пути
    }, [pathname]);
    const isAuthModule = (pathname: string) => {
        return pathname.includes('/sign')
    }

    const AuthLayout = (<Routes>
        <Route path="/signin" element={<AuthIn/>}/>
        <Route path="/signup" element={<AuthUp/>}/>
        <Route path="/formail" element={<ForgotPassword/>}/>
    </Routes>);

    const AppLayout = (
        <>
            <NavigationRow />
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopWrapper title={'Shop'}><ShopPage/></ShopWrapper>}/>
                <Route path="/search" element={<ShopWrapper title={'Search'}><SearchPage/></ShopWrapper>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/cart/checkout" element={<CheckoutPage/>}/>
                <Route path="/cart/checkout/complete" element={<CompletePage/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/article/:artId" element={<Article/>}/>
                <Route path="*" element={<HomePage/>}/>
                <Route path="/account*" element={<Account/>}/>
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
            {!pathname.includes('cart') && <NewsletterSubscribe/>}
            <Footer/>
        </>
    )

    return (
        <div className={"wrapper"}>
            {(isAuthModule(pathname)) ? AuthLayout : AppLayout}
        </div>
    );
}

export default App;
