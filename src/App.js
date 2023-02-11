import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import Client from "./components/client/Client";
import Company from "./components/company/Company";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Supplier from "./components/supplier/Supplier";


function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Supplier/>
    <Service/>
    <Company/>
    <Client/>
    <Blog/>
    <Map/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
