import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import img1 from '../assets/img1.jpg';

import FeaturesComponent from './FeatureComponent.jsx'
import OurEcoSortJourney from './Intro.jsx'
import ImageUpload from './imagesupload.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import RecyclingTips from './Recycling.jsx';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
         <Navbar/>
  <OurEcoSortJourney/>
    <FeaturesComponent />
    <RecyclingTips/>
    <ImageUpload/>
    <Footer/>

    
  
    </div>
      ) : (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: `url(${img1})`}}>
          <button onClick={loginWithRedirect} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Get started
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
