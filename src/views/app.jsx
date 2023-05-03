/* eslint-disable react/jsx-pascal-case */
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { Login } from '../views/login'
import { Find } from '../views/find'
import { Register } from '../views/register';
import { Item_page } from './item_page';
import UserDetails from "../components/userDetails";

function App() {
  //const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
        <Router>
          <Routes>
          {/* <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          /> */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/find/item_page" element={<Item_page />} />
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