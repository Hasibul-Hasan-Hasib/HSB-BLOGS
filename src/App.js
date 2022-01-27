import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Appbar from './components/Appbar/Appbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import Notfound from './Pages/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
