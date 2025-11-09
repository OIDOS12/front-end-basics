import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const getButtonStyle = (path) => ({
    padding: '10px 15px', 
    margin: '0 5px', 
    cursor: 'pointer',
    backgroundColor: location.pathname === path ? '#007bff' : '#f0f0f0',
    color: location.pathname === path ? 'white' : 'black',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none'
  });

  return (
    <header style={{ 
      padding: '10px', 
      borderBottom: '1px solid #ccc', 
      display: 'flex', 
      alignItems: 'center'
    }}>
      <h1>Лабораторна робота №7</h1>
      <div className="tabs">
        <Link to="/task1" style={getButtonStyle('/task1')}>Завдання 1</Link>
        <Link to="/task2" style={getButtonStyle('/task2')}>Завдання 2</Link>
      </div>
    </header>
  );
}

export default Header;