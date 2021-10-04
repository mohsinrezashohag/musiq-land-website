
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import ServiceDetails from './components/ServicesDetails/ServiceDetails';
import Admission from './components/Admission/Admission';

function App() {
  return (
    <div>

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>


          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route exact path="/admission">
            <Admission></Admission>
          </Route>


          <Route exact path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
