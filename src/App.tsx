import React from 'react';
import logo from './logo.svg';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Home, About} from "./pages"
import {Navs} from './components'

import './App.css';
import './App.sass'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className={'title'}>DaoCloud 自动化部署攻略</div>
                <div className={'progress'}>
                    详情查看<a href={'https://www.jianshu.com/p/c06ff3293a35'} target={'_blank'}>DaoCloud 自动化部署攻略</a>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Navs />
            </header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
