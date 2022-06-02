import { useContext } from "react";
import './App.css';
// import HorizontalScroll from 'react-scroll-horizontal';

function App() {


  

  return (
    <div className="App">
       
       
      {/* <HorizontalScroll 
      config={{stiffness: 400, damping: 100}}> */}
      <div className="wrapper">
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
        </div>
        {/* </HorizontalScroll> */}
    </div>
  );
}

export default App;
