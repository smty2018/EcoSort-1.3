import React, { useState, useEffect } from 'react';
import img1 from '../assets/intro2.jpg';

const OurEcoSortJourney = () => {
  const [textAnimation, setTextAnimation] = useState('');

  useEffect(() => {
    const text = "Driven by a commitment to sustainability, EcoSort was founded to provide users with valuable insights on garbage items and their environmental impact.";
    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setTextAnimation(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Our EcoSort Journey
        </h2>
        <p className="mt-4 text-xl text-center text-gray-600">
          {textAnimation}
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={img1}
            alt="EcoSort logo"
            className="rounded-lg shadow-lg"
            style={{ width: '75%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurEcoSortJourney;
