import React from 'react';

import './App.css';
import Main from "./Mains/Main";
import Header from "./Mains/Header";
import Footer from "./Footer/Footer";
import Contacts from "./Contact/Contacts";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";




function App() {
    return (
        <div className="App">
            <div className='mainHeader'>
                <div className='boxShadow'>
                    <Header/>
                    <Main/>
                </div>
            </div>
            <Skills/>
            <Project/>
            <Footer/>


        </div>
    );
}

export default App;
