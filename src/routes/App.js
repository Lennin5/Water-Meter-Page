import "../assets/css/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../containers/Home";
import Solutions from "../containers/Solutions";
import OurTechnology from "../containers/OurTechnology";
import ContactWithUs from "../containers/ContactWithUs";
import OurCompany from "../containers/OurCompany";
import GetADemo from "../containers/GetADemo";
import NotFound from "../containers/NotFound";

function App() {
  return(
  <div>
    <BrowserRouter>
    <Header />
      <ScrollToTop />
        <Switch>    
            <Route exact path="/" component={Home} />
            <Route exact path="/solutions" component={Solutions} />
            <Route exact path="/our-technology" component={OurTechnology} />            
            <Route exact path="/contact-with-us" component={ContactWithUs} />      
            <Route exact path="/our-company" component={OurCompany} />            
            <Route exact path="/get-a-demo" component={GetADemo} />      
            <Route component={NotFound} />            
        </Switch>
    <Footer />
    </BrowserRouter>    
  </div>
  )
}

export default App;

