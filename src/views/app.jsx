import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { Navbar } from '../components/navbar'
import { Login } from '../views/login'
import { Find } from '../views/find'
import { Register } from '../views/register';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/find/" element={<Find />} />
            <Route path="/carts/" />
            <Route path="/login/" element={<Login />} />
            <Route path="/register/" element={<Register />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;