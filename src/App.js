import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Registation from './Components/Registration'
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Header';
import {Routes,Route} from 'react-router-dom'
import Protected from './Components/Protected';
import Game from './Components/Game/BigSquare';


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/registration' element = {<Registation/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/' element = {<Protected/>}>
    <Route path='/' element = {<Home/>}/>
    </Route>
    <Route path='/game' element = {<Protected/>}>
    <Route path='/game' element = {<Game/>}/>
    </Route>
    </Routes>

    </>
  );
}

export default App;


