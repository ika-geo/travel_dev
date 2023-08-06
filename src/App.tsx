import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import HeaderFooter from "./components/headerFooter/HeaderFooter";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NoPage from "./pages/NoPage";
import Tour from "./pages/tour/Tour";
import Tours from "./pages/tours/Tours";
import Contact from "./pages/contact/Contact";

import {someApi} from "./FakeApi/API";

import "../src/assets/style/style.css"





const App = () => {




    return (
        <React.StrictMode>
                <HashRouter>
                    <Routes>
                        <Route element={<HeaderFooter/>}>
                           <Route index element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="tours" element={<Tours/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            {someApi.map(item=>
                                <Route key={item.title} path={item.title} element={<Tour item={item}/>}/>
                            )}
                            <Route path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </HashRouter>
        </React.StrictMode>
    );
};

export default App;