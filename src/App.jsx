import "./App.css";
import Banner from "./Components/Banner";
import ContentBlock from "./Components/ContentBlock";
import { Header } from "./Components/Header";
import LogoCarousel from "./Components/LogoCarousel";
import Service from "./Components/Service";
import Testimonial from "./Components/Testimonial";

function App() {
  return <>
  <Header/>
  <Banner/>
  <LogoCarousel/>
  <Service/>
  <ContentBlock/>
  <Testimonial/>
  </>;
}

export default App;
