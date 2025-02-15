import React from 'react';

const NewsSection = () => {
  const newsData = [
    {
      category: '#Nutrition',
      title: 'Healthy food and nutrition among all the children',
      description: 'Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...',
      date: '30 Dec, 2021',
      author: 'Admin',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      category: '#Education',
      title: 'New era for children learning and remove discrimination',
      description: 'Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...',
      date: '30 Dec, 2021',
      author: 'Admin',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      category: '#Water',
      title: 'Ensure pure and mineral drinking water for rural people',
      description: 'Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...',
      date: '30 Dec, 2021',
      author: 'Admin',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <section className="bg-[#f9fbfd] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-600">News</h2>
        <h3 className="text-4xl font-bold mb-6">
          In The <span className="text-[#ffb400]">News</span>
        </h3>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {newsData.map((news, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-[#ff5a5f] font-semibold">{news.category}</span>
              <h4 className="text-lg font-bold mt-2 mb-2">{news.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{news.description}</p>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>Date: {news.date}</span>
                <span>By: {news.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;