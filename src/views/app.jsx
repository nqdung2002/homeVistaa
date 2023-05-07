/* eslint-disable react/jsx-pascal-case */
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { Login } from '../views/login'
import { Find } from '../views/find'
import { Register } from '../views/register';
import { Item_page } from './item_page';
import UserDetails from "../components/userDetails";
import { PlayPage } from './models3d';
import { House2 } from './house2';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/find/:slug" element={<Item_page/>} />
            <Route path="/find/:slug/playpage" element={<PlayPage />} />
            <Route path="/find/classic/playpage" element={<House2 />} />
            <Route path="/carts" />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userDetails" element={<UserDetails />} />
            

          </Routes>
        </Router>
    </div>
  );
}

export default App;