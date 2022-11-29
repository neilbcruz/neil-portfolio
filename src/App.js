import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <PageHeader />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/geek' element={<HobbiesPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
