import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { Navbar } from '../components/navbar'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home/" element={<Home />} />
            <Route path="/carts/" />
          </Routes>
        </Router>
    </div>
  );
}

export default App;