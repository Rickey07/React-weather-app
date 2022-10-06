import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Searchform from './Components/Searchform'
import Weathercard from './Components/Weathercard'
import {CityContextProvider} from './contexts/Citycontext'

function App() {
  return (
    <>
      <div className="App">
        <CityContextProvider>
          <Header/>
          <Searchform/>
          <Weathercard/>
          <Footer/>
        </CityContextProvider>
      </div>
    </>
  );
}

export default App;
