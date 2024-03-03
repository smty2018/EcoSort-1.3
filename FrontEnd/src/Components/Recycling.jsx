import React from 'react';
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';

const RecyclingTips = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Top 5 Ways to Recycle Garbage</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {recyclingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={tip.image} alt={` Recycling Tip ${index + 1}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const recyclingTips = [
    {
        title: 'Separate Your Recyclables',
        description: 'Sort your recyclables properly by separating paper, plastic, glass, and metal materials into designated bins.',
        image: r1,
    },
    {
        title: 'Reduce, Reuse, Recycle',
        description: 'Reduce waste by choosing products with minimal packaging, and reuse items whenever possible before recycling.',
        image: r2,
    },
    {
        title: 'Composting Organic Waste',
        description: 'Start composting food scraps and yard waste to create nutrient-rich soil for gardening and landscaping.',
        image: r3,
    },
    {
        title: 'Donate or Repurpose',
        description: 'Donate gently used items to charity or find creative ways to repurpose materials for DIY projects.',
        image: r4,
    },
];

export default RecyclingTips;