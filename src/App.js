import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Searchform from "./Components/Searchform";
import Weathercard from "./Components/Weathercard";
import { CityContextProvider } from "./contexts/Citycontext";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      <div className="App">
        <CityContextProvider>
          <Header />
          <Container className="d-flex flex-column justify-content-center" style={{minHeight:"84vh"}}>
            <Searchform />
            <Weathercard />
          </Container>
          <Footer />
        </CityContextProvider>
      </div>
    </>
  );
}

export default App;
