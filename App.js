import React, {useEffect, useState} from 'react';
export default function App(){
  const [msg, setMsg] = useState('Loading...');
  useEffect(()=>{
    fetch('/api/hello')
      .then(r=>r.json())
      .then(j=>setMsg(j.message))
      .catch(e=>setMsg('Could not reach API: '+e.message));
  },[]);
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Vaulta</div>
        <nav className="nav">
          <a>Wallet</a><a>Exchange</a><a>AI</a><a>Academy</a>
        </nav>
      </header>
      <main className="main">
        <h1>Welcome to Vaulta 🚀</h1>
        <p className="lead">The all-in-one financial super app (demo).</p>
        <div className="card">
          <strong>API says:</strong> <pre>{msg}</pre>
        </div>
        <button onClick={()=>alert('Demo action')}>Get Started</button>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Vaulta — Marcel Laframboise</footer>
    </div>
  );
}
