import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import img1 from '../assets/img1.jpg';

const LandingPage = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    
    console.log('Submitted:', selectedFile);
    window.alert('Submitted successfully!');
  };

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {isAuthenticated ? (
          <>
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="upload-input"
              />
              <label htmlFor="upload-input" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Upload Image
              </label>
              {previewImage && (
                <button onClick={handleSubmit} className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              )}
            </div>
            {previewImage && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Preview:</h2>
                <img src={previewImage} alt="Preview" className="max-w-md" />
              </div>
            )}
            <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
              Log out
            </button>
          </>
        ) : (
          <button onClick={loginWithRedirect} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get started
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
