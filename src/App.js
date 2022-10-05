
import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Units from './pages/Units/Units'
import Header from "./components/Header";
import UnitDetail from "./pages/UnitDetail/UnitDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
     <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/units" component={Units} />
          <Route exact path="/unitDetail/:id" component={UnitDetail} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
