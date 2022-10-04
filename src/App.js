
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Units from './pages/Units/Units'
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/units" component={Units} />

          {/* <Route exact path="/units/:id" component={AddEditUser} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;