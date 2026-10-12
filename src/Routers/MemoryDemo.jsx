
import {
  MemoryRouter,
  Routes,
  Route,
  NavLink,
  useLocation
} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function RouteInfo() {
  const location = useLocation();

  return (
    <p className="route-info">
      Current internal route: {location.pathname}
    </p>
  );
}

function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div className="demo-card">
        <h2>🧠 MemoryRouter</h2>
        <p>Navigate without changing the browser URL.</p>

        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <RouteInfo />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default MemoryDemo;

