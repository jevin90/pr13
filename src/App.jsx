
import { useState } from 'react';

import HashDemo from './Routers/HashDemo';
import MemoryDemo from './Routers/MemoryDemo';
import StaticDemo from './Routers/StaticDemo';

function App() {
  const [router, setRouter] = useState('hash');

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 React Router Playground</h1>
        <p>Learn routing with simple interactive examples</p>
      </header>

      <main className="container">
        <div className="router-buttons">
          <button
            className={router === 'hash' ? 'active hash' : ''}
            onClick={() => setRouter('hash')}
          >
            🔗 HashRouter
          </button>

          <button
            className={router === 'memory' ? 'active memory' : ''}
            onClick={() => setRouter('memory')}
          >
            🧠 MemoryRouter
          </button>

          <button
            className={router === 'static' ? 'active static' : ''}
            onClick={() => setRouter('static')}
          >
            🖥️ StaticRouter
          </button>
        </div>

        {router === 'hash' && <HashDemo />}
        {router === 'memory' && <MemoryDemo />}
        {router === 'static' && <StaticDemo />}

        <section className="comparison">
          <h2>📚 Quick Comparison</h2>

          <div className="comparison-row">
            <strong>HashRouter</strong>
            <span>Uses # in the URL</span>
          </div>

          <div className="comparison-row">
            <strong>MemoryRouter</strong>
            <span>Stores routes in memory</span>
          </div>

          <div className="comparison-row">
            <strong>StaticRouter</strong>
            <span>Resolves routes for server rendering</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        Made with ❤️ using React Router
      </footer>
    </div>
  );
}

export default App;
