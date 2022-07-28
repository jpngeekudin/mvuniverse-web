import LayoutMain from 'layouts/LayoutMain';
import ExplorePage from 'pages/ExplorePage';
import HypePage from 'pages/HypePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMain/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/hype' element={<HypePage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
