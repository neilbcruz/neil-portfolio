import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';

// Google Analytics //
// import ReactGA from 'react-ga';
// const TRACKING_ID = 'G-3ZNEXY83BD';
// ReactGA.initialize(TRACKING_ID);

// GA 4 //
import ReactGA from 'react-ga4';
ReactGA.initialize('G-3ZNEXY83BD')

ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
});

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
