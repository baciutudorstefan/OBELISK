import { useContext } from "react";
import './App.css';
// import HorizontalScroll from 'react-scroll-horizontal';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {

  return (
    <div className="App" >
      
        
    {/* <InfiniteScroll/> */}


      {/* <HorizontalScroll 
      config={{stiffness: 400, damping: 100}}> */}
      <div className="wrapper">
      <CustomCursor
      // targets={['.link', '.your-css-selector']}
      customClass='custom-cursor'
      dimensions={70}
      strokeColor='#000'
      fill='none'
      strokeWidth='3'
      smoothness={{
        movement: 0.2,
        scale: 0.5,
        opacity: 1,
      }}
      targetOpacity='0.2'
    />
        <div  className="main bg-first">
            <h1 >Obelisk 1</h1>
        </div>
        <div  className="main bg">
            <h1>Obelisk 2</h1>
        </div>
        <div  className="main bg">
            <h1>Obelisk 3</h1>
        </div>
        <div  className="main bg-last">
            <h1>Obelisk 4</h1>
        </div>
        </div>
        {/* </HorizontalScroll> */}
      
    </div>
  );
}

export default App;
