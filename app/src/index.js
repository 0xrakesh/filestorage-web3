import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';

function Main() {
  const [isNavbarEffectDone, setNavbarEffectDone] = useState(false);

  return (
    <React.StrictMode>
      <Navbar onNavbarEffectComplete={() => setNavbarEffectDone(true)} />
      {
        isNavbarEffectDone ? 
          <App isNavbarEffectDone={isNavbarEffectDone} />
        : null
      }
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
