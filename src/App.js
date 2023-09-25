import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useEffect } from 'react';

import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';

// Google Analytics //
// import ReactGA from 'react-ga';
// const TRACKING_ID = 'G-3ZNEXY83BD';
// ReactGA.initialize(TRACKING_ID);

// GA 4 //
import ReactGA from 'react-ga4';
const MEASUREMENT_ID = 'G-3ZNEXY83BD';
ReactGA.initialize(MEASUREMENT_ID)

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className='app'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Neil Cruz Portfolio</title>
          <link rel="icon" href="./assets/icons/favicon.ico" />
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
