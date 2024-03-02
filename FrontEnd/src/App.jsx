// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginPage from './Components/LoginPage';
import NewsCard from './Components/NewsCard';
import Intro from './Components/Intro';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-xhhk4v5wwzv5zdhu.us.auth0.com"
      clientId="0ZhuUB5fTKRI5GDEQwNIy0Kq85VU5cBl"
      redirectUri={window.location.origin}
    >
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<LoginPage />} />
        <Route path='/News' element={<NewsCard />} />
        <Route path='/Products' element={<Intro/>} />
      </Routes>
    </Auth0Provider>
  );
};
  
  
export default App;



