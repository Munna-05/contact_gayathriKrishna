import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/adminHome' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
