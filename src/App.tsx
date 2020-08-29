
import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// import logo from './logo.svg';
// import {Home, About} from "./pages"
// import {Navs} from './components'
//
// import './App.css';
// import './App.sass'
//
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <div className={'title'}>DaoCloud 自动化部署攻略</div>
//                 <div className={'progress'}>
//                     详情查看<a href={'https://www.jianshu.com/p/c06ff3293a35'} target={'_blank'}>DaoCloud 自动化部署攻略</a>
//                 </div>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//                 <Navs />
//             </header>
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path="/">
//                         <Home />
//                     </Route>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Redirect to="/" />
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }
//
// export default App;


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
