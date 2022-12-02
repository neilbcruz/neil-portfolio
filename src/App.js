import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';

function App() {
  return (
    <>
      <div className='app'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Neil Cruz Portfolio</title>
          <link rel="canonical" href="https://neilbcruz.com/" />
          <meta name="description" content="Neil Cruz's Portfolio" />
        </Helmet>
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
