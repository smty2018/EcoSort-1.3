import React from 'react';

const Footer = () => (
  <footer className="py-8" style={{
    backgroundColor: 'rgba(192,254,114,0.8)',
  }}>
    <div className="container mx-auto flex flex-wrap justify-between items-start">
      <div className="w-full md:w-auto mb-4 md:mb-0 align-top px-4">
        <h2 className="text-xl font-bold mb-4">EcoSort</h2>
        <p className="mb-4">Join our community and help make a difference in the world!</p>
        <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" style={{
          backgroundColor: 'rgba(255,255,255,0.3)',
          backgroundDropFilter: 'blur(2px)',
        }}>
          Join Now
        </button>
      </div>
      <div className="w-full md:w-auto mb-4 md:mb-0 align-top px-4">
        <h2 className="text-xl font-bold mb-4">Help & Support</h2>
        <ul className="list-reset">
          <li className="mb-2">
            <a href="/help-center" className="hover:text-gray-400">
              Help Center
            </a>
          </li>
          <li className="mb-2">
            <a href="/faqs" className="hover:text-gray-400">
              FAQs
            </a>
          </li>
          <li className="mb-2">
            <a href="/customer-support" className="hover:text-gray-400">
              Customer Support
            </a>
          </li>
          <li className="mb-2">
            <a href="/guidelines" className="hover:text-gray-400">
              Guidelines
            </a>
          </li>
          <li className="mb-2">
            <a href="/contact-support" className="hover:text-gray-400">
              Contact Support
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-auto mb-4 md:mb-0 align-top px-4">
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <ul className="list-reset">
          <li className="mb-2">
            <a href="/learn-more" className="hover:text-gray-400">
              Learn More
            </a>
          </li>
          <li className="mb-2">
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="/site-map" className="hover:text-gray-400">
              Site Map
            </a>
          </li>
          <li className="mb-2">
            <a href="/subscriptions" className="hover:text-gray-400">
              Subscriptions
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-auto align-top px-4">
        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
        <ul className="list-reset flex justify-center md:justify-end">
          <li className="mr-4">
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
