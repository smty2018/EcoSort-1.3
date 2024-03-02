import React from 'react';
import img1 from "../assets/Eco.png";
import img2 from "../assets/protect.png";
import img3 from '../assets/Save.png';
import img4 from  '../assets/Env.png'
function FeaturesComponent() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto">
        <div className="mb-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            FEATURES
          </h2>
        </div>
        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex">
            <div className="mr-4">
              <img src={img1} alt="Image 1" className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Intuitive and eco-conscious
              </h3>
              <p className="mt-2 text-gray-600">
                Our services are designed to be easy to use and eco-friendly.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex">
            <div className="mr-4">
              <img src={img2} alt="Image 2" className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Explore our eco-friendly services
              </h3>
              <p className="mt-2 text-gray-600">
                From waste analysis to disposal guidance, we offer a range of eco-friendly services.
              </p>
            </div>
          </div>
          {/* Additional Features */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex">
            <div className="mr-4">
              <img src={img3} alt="Image 1" className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Simplicity is our strength
              </h3>
              <p className="mt-2 text-gray-600">
                We believe in making things simple yet effective.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex">
            <div className="mr-4">
              <img src={img4} alt="Image 2" className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Customized solutions for all needs
              </h3>
              <p className="mt-2 text-gray-600">
                Tailored solutions to meet your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
