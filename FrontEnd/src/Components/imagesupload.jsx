import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageSubmit = async (event) => {
    console.log('handleSubmit called');
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedFile);

        console.log('Sending request to server');
        try {
                const response = await fetch('http://127.0.0.1:5000/predict', {
                        method: 'POST',
                        body: formData,
                });

                console.log('Received response from server');
                if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                console.log('Prediction:', data.prediction);
                console.log('Acc',data.accuracy)
                //setPrediction(data.prediction.flat());

                // Show a pop-up with the prediction and accuracy
                window.alert(`Prediction: ${data.prediction}\nAccuracy: ${data.accuracy}`);
            } catch (error) {
                console.error('Error:', error);
            }
          };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Upload Images
        </h2>
        <p className="mt-4 text-xl text-center text-gray-600">
          Upload up to 5 images to get started.
        </p>
        <form onSubmit={handleImageSubmit}>
          <div className="mt-8 flex justify-center">
            <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:border-gray-600 dark:hover:border-gray-500 hover:bg-gray-100 dark:bg-gray-700">
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              )}
              <input id="image-upload" type="file" accept="image/*" multiple className="hidden" onChange={handleImageChange} />
            </label>
          </div>
          <div className="mt-4 text-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;