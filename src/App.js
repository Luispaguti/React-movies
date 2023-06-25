import Home from './screens/home/Home';
import Movies from './screens/movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Series from './screens/series/Series';

function App() {
  return (
    < >
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/movies' element={<Movies />} />
     <Route path='/series' element={<Series/>} />
      
      </Routes>
    </>
  );
}

export default App;
