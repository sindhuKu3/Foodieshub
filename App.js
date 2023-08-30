import './App.css';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Setting from './pages/Setting';
import Home from './pages/Home' ;
import Recipies from './pages/Recipies' ;
function App() {
  return (
   <Router>
     <Navbar />
    <div className="App">
     <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route path='/Setting' element={<Setting/>} ></Route>
      <Route path='/Recipies' element={<Recipies/>} ></Route>
     </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
