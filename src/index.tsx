import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/fonts.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initLocatorRepository} from "./general/di/service_locator";
import {Provider} from "react-redux";
import {store} from "./general/redux/store";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./general/utils/ScrollToTop";

initLocatorRepository();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <BrowserRouter>
            <ScrollToTop/>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
