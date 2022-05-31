import logo from './logo.svg';
import './App.css';
import HorizontalScroll from 'react-scroll-horizontal';

function App() {

  const child   = { width: `30em`, height: `100%`}


  return (
    <div className="App">
      <HorizontalScroll 
      config={{stiffness: 400, damping: 100}} 
      >
        <div  className="main bg">
            <h1>Obelisk 1</h1>
        </div>
        <div  className="main bg">
            <h1>Obelisk 2</h1>
        </div>
        <div  className="main bg">
            <h1>Obelisk 3</h1>
        </div>
        <div  className="main bg">
            <h1>Obelisk 4</h1>
        </div>
        </HorizontalScroll>
    </div>
  );
}

export default App;
