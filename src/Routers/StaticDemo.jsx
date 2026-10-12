import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';

function ServerApp() {
  return (
    <StaticRouter location="/about">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StaticRouter>
  );
}

export default ServerApp;