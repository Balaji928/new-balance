import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Men from './pages/Men';
import Shoe from './pages/Shoe';
import Tshirts from './pages/Tshirts';
import Hoodie from './pages/Hoodie';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Graphictee from './pages/Graphictee';
import Matchingset from './pages/Matchingset';
import Longsleeve from './pages/Longsleeve';
import Bottom from './pages/Bottom';
import Jacket from './pages/Jacket';
import Accessories from './pages/Accessories';
import Sock from './pages/Sock';
import Bag from './pages/Bag';
import Hat from './pages/Hat';
import Cart from './pages/Cart'
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import Delete from './pages/Delete';
import Edit from './pages/Edit';
import Editbags from './pages/Editbags';
import Uploadbags from './pages/Uploadbags';
import Deletebags from './pages/Deletebags';
import Form from './pages/Form';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/shoe' element={<Shoe/>}/>
        <Route path='/t-shirts' element={<Tshirts/>}/>
        <Route path='/hoodie' element={<Hoodie/>}/>
        <Route path='/graphictee' element={<Graphictee/>}/>
        <Route path='/matchingset' element={<Matchingset/>}/>
        <Route path='/longsleeve' element={<Longsleeve/>}/>
        <Route path='/bottom' element={<Bottom/>}/>
        <Route path='/jacket' element={<Jacket/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/sock' element={<Sock/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/hat' element={<Hat/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/editbags/:id' element={<Editbags/>}/>
        <Route path='/uploadbags' element={<Uploadbags/>}/>
        <Route path='/deletebags' element={<Deletebags/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
