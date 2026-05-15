import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="hero-title">
        <p className="eyebrow">Production Demo</p>
        <h1 id="hero-title">Hello, World!</h1>
        <p className="subtitle">一个已准备好构建和部署的极简网页。</p>
        <a className="cta" href="https://www.codebuddy.ai/" target="_blank" rel="noreferrer">
          Built with CodeBuddy
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
