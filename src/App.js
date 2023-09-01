import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import Home from './components/Home/Home'
import MovieList from './components/MovieList/MovieList'; 
import MovieDetail from './components/MovieDetail/MovieDetail'; 




const App = () => {
  return (
    <div>
      
    <Routes>
       {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      
    </Routes>

    </div>
    
  );
};

export default App;
