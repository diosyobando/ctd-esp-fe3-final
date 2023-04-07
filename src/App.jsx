
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Detail/>}/>
          <Route path='/' element={<Favs/>}/>
          <Route path='/' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;
