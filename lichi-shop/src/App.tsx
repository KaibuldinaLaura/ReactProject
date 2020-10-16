import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Categories from "./components/categories";
import NewClothes from "./components/newClothes";
import Clothes from "./components/clothes"
import Registration from "./components/registration";
import Login from "./components/login";
import Cart from "./components/cart";

class App extends Component {
    render() {
        return (
            <Router>
                <nav id="nav">
                    <ul className="container">
                        <li><Link to={'/'}>Lichi</Link></li>
                        <li><Link to={'/newClothes'}>Новинки</Link></li>
                        <li><Link to={'/categories'}>Категории</Link></li>
                        <li><Link to={'/clothes'}>Одежда</Link></li>
                        <li><Link to={'/cart'}>Корзина</Link></li>
                        <li><Link to={'/login'}>Войти</Link></li>
                        <li><Link to={'/registration'}>Регистрация</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/newClothes' component={NewClothes} />
                    <Route path='/categories' component={Categories} />
                    <Route path='/clothes' component={Clothes} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/login' component={Login} />
                    <Route path='/registration' component={Registration} />
                </Switch>
            </Router>
        );
    }
}

export default App;
