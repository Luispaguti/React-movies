import Home from './screens/home/Home';
import Movies from './screens/movies/Movies';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    < >
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/movies' element={<Movies />} />
      
      </Routes>
    </>
  );
}

export default App;
