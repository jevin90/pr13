
import {
  HashRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function HashDemo() {
  return (
    <HashRouter>
      <div className="demo-card">
        <h2>🔗 HashRouter</h2>
        <p>Notice the # symbol in the browser URL.</p>

        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default HashDemo;
