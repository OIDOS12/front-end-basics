import React from 'react';
import GoodsCard from './GoodsCard';

import appleImage from './apples.jpeg';
import pearImage from './blakes-pride-pear.png';
import plumImage from './plums.jpg';
import datesImage from './dates.jpg';
import strawberryImage from './strawberry.jpeg';
import durianImage from './durian.jpg';
import pineappleImage from './pineapple.jpeg';

const goodsData = [
  { id: 1, name: "Яблука", price: 59, image: appleImage },
  { id: 2, name: "Груші", price: 67, image: pearImage },
  { id: 3, name: "Сливи", price: 199, image: plumImage },
  { id: 4, name: "Фініки", price: 159, image: datesImage },
  { id: 5, name: "Полуниця", price: 299, image: strawberryImage },
  { id: 6, name: "Дуріан", price: 4899, image: durianImage },
  { id: 7, name: "Ананас", price: 550, image: pineappleImage }
];

function GoodsGallery() { 
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Галерея Товарів (ціни за 1 кг):</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {goodsData.map(good => (
          <GoodsCard 
            key={good.id} 
            name={good.name} 
            price={good.price} 
            image={good.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default GoodsGallery;