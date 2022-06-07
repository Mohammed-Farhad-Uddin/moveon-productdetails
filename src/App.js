import React from 'react';
import './App.css';
import Details from './components/Details';
import Gallery from './components/Gallery';



function App() {


  return (
    <div className="row cart">
      <div className="col-md-5 ms-0 px-0 col-sm-5">
        <Gallery />
      </div>
      <div className="col-md-7 mx-0 px-0 cart-details col-sm-7">
        <Details />
      </div>
    </div>
  );
}

export default App;
