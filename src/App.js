import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="is-preload">
      <Header />
      <div id="main">
        <Intro />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
