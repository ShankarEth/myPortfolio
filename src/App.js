import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './components/1_HomePage/Home';
import About from './components/2_AboutPage/About';
import Resume from './components/3_Resume/Resume';
import Portfolio from './components/4_PortfolioPage/Portfolio';
import Blog from './components/5_Blog/Blog';
import Contact from './components/6_Contact/Contact';
function App() {
  return (
    <div class="App">
      <BrowserRouter basename='/Portfolio'>
        <Routes>
          <Route path="/Portfolio" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio1" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
