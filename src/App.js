import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout  from './components/layout';
import Home from './components/home';
import About from './components/about';
import Playground from './components/playground';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='playground' element={<Playground />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;
