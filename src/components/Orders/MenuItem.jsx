import React from 'react';

const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: R {price.toFixed(2)}</p>
      <div>
        <button>-</button>
        <span>0</span> {/* This is just a placeholder, in a real app you'd want to manage this number with state */}
        <button>+</button>
        <button>Add</button>
      </div>
    </div>
  );
}

export default MenuItem;
