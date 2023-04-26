import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { Navbar } from '../components/navbar'
import { Login } from '../views/login'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home/" element={<Home />} />
            <Route path="/carts/" />
            <Route path="/login/" element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;