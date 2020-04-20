import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

import StardogStudio from './components/StardogStudio';
import Studao from './components/Studao';

import MainNav from './components/MainNav';
import ScrollToTop from './components/ScrollToTop';
import FourOFour from './components/FourOFour';
import Footer from './components/Footer';

import { TransitionGroup, CSSTransition } from 'react-transition-group';


import "animate.css/animate.min.css";
import './styles/main.scss'

function AppRouter() {
  let location = useLocation();
  return (
      <>
      <ScrollToTop />
      <MainNav />
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="page-transition"
              timeout={300}
            >
              <Switch location={location}>
                <Route path="/" exact children={<Home />} />
                <Route path="/about" exact children={<About />} />designing-ux-in-a-b2b-environment-for-a-technical-audience-sta
                <Route path="/designing-ux-in-a-b2b-environment-for-a-technical-audience-stardog-studio" exact children={<StardogStudio />} />
                <Route path="/designing-an-online-learning-platform-for-independent-filmmakers" exact children={<Studao />} />
                <Route children={<FourOFour />} />
              </Switch>
            </CSSTransition>
        </TransitionGroup>
      <Footer />
    </>
  )
  

}

function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
