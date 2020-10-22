import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import DataProvider from "./databases/DataProvider"
import Section from "./components/Section"
import Header from "./components/Header"

class App extends Component {
    render() {
        return (
            <DataProvider>
            <div className = "app">
                <Router>
                    <Header />
                    <Section />
                </Router>
            </div>
            </DataProvider>
        );
    }
}

export default App;
