import React from 'react';
import './Categories.css'; 

const Categories = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      name: 'MyRecord',
      text: '내 기록',
    },
    {
      name: 'Library',
      text: '서재',
    },
    {
      name: 'Bookmarks',
      text: '찜한 기록',
    },
  ];

  const handleCategoryClick = (categoryName) => {
    onCategoryChange(categoryName);
  };

  return (
    <div className="categoriesContainer">
      <ul className="categoriesList">
        {categories.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`categoriesItem ${selectedCategory === category.name ? 'active' : ''}`}
          >
            {category.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;