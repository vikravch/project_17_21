import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import Blog from "./modules/blog/page/Blog";

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center"
        }}>
            <NavigationRow/>
            <main style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<Blog/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
