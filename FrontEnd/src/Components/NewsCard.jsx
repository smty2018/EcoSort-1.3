import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '../assets/news-bg.jpg';

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=Sustainability&from=2024-03-01&sortBy=popularity&apiKey=3af95c35f4fd4062b9a1ca46a1ed6e98'
        );

        // Check if articles array exists and has at least one item
        if (response.data.articles && response.data.articles.length > 0) {
          // Limit the news articles to top 6
          setNews(response.data.articles.slice(0, 12));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-col items-center" style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <h1 className="text-3xl font-bold text-center mb-2 pt-2 pb-4 w-full text-white" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
        backdropFilter: 'blur(5px)' // Adjust the blur radius as needed
      }}>Latest Sustainability News</h1>
      <div className="flex justify-center flex-wrap">
        {news.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md m-4" style={{ flexBasis: '30%',   
          }}>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <a href={article.url} className="text-green-500 hover:text-green-700">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
