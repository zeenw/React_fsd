import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from './component/common/Topbar';
import Header from './component/common/Header';
import Footer from './component/common/Footer';

import Home from './page/Home';
import Register from './page/account/Register';
import Login from './page/account/Login';

import Appointment from './page/appointment/Appoinment';
import Create from './page/appointment/Create';
import Detail from './page/appointment/Detail';

import  './component/common/Stylecommon.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />

          {/* Add them later
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          */}

          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          
          <Route path="/appointment" exact element={<Appointment />} />
          <Route path="/appointment/create" exact element={<Create />} />
          <Route path="/appointment/detail/:id" exact element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;