import React from 'react';

function GoodsCard(props) {
  const { name, price, image } = props;

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px', 
      width: '200px', 
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        
      <img 
        src={image} 
        alt={name} 
        style={{ width: '100%', height: '175px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <h3>{name}</h3>
      <p style={{ fontWeight: 'bold', color: '#007bff' }}>
        Ціна: {price} грн
      </p>
    </div>
  );
}

export default GoodsCard;