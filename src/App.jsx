import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Home from './routes/Home';
import Console from './routes/Console';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/console' element={<Console />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
