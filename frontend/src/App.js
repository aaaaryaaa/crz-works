import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import CommercialConstruction from './components/CommercialConstruction';
import CommercialConversion from './components/CommercialConversion';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ImpForms from './components/ImpForms';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NewAppl from './components/NewAppl';
import NotFound from './components/NotFound';
import PrevAppl from './components/PrevAppl';
import ResidentialConstruction from './components/ResidentialConstruction';
import ResidentialConversion from './components/ResidentialConversion';
import UpdateAppl from './components/UpdateAppl';
import { Toaster } from 'react-hot-toast';
import ViewAppl from './components/ViewAppl';

function App() {
  const [logged, setLogged] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  useEffect(() => {
    setLogged(localStorage.getItem('token'));
    //setRole('ADMIN');
    setRole(localStorage.getItem('role'));
  }, [localStorage.getItem('token'), localStorage.getItem('role')]);

  return (
    <div className="App bg-gray-100">
      <Router>
        <div className=''>
        <Toaster/>
          <Header />
          <Navbar />
        </div>
        <Routes>
        <Route
                path="/login"
                element={
                  <Login />
                }
              />
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                path="/about"
                element={
                  <About />
                }
              />
          {role==='USER' && (
            <>
              <Route
                path='/newappl'
                element={
                  <NewAppl />
                }
              />
              <Route
                path='/prevappl'
                element={
                  <PrevAppl />
                }
              />
              <Route
                path='/viewappl'
                element={
                  <ViewAppl />
                }
              />
              <Route
                path='/updateappl'
                element={
                  <UpdateAppl />
                }
              />
              <Route
                path='/impforms'
                element={
                  <ImpForms />
                }
              />
            </>
          )}
          {role=='ADMIN' && (
            <>
              <Route
                path='/admin'
                element={
                  <Admin />
                }
              />
              <Route
                path='/resiConversion'
                element={
                  <ResidentialConversion />
                }
              />
              <Route
                path='/resiConstruction'
                element={
                  <ResidentialConstruction />
                }
              />
              <Route
                path='/commConversion'
                element={
                  <CommercialConversion />
                }
              />
              <Route
                path='/commConstruction'
                element={
                  <CommercialConstruction />
                }
              />
            </>
          )}
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
