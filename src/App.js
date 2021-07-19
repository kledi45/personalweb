import Footer from './shared/footer/footer';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './shared/header/header';
import Home from './pages/home/home';
import Contat from './pages/contact/contact';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route exact path ='/' component = {Home} />
      <Route path ='/about' component = {About} />
      <Route  path ='/contact' component = {Contat} />
      <Route  path ='/portfolio' component = {Portfolio} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
