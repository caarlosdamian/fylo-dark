import {
  Hero,
  Header,
  Features,
  Team,
  Testimonials,
  Contact,
  Footer,
} from "../sections";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Hero />
        <Features />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
