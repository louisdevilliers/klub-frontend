import React from 'react';
import Cart from './Cart';
import MenuTabs from './MenuTabs';
import MenuItem from './MenuItem';

const menuItemsData = [
    {
      id: 1,
      name: "Cheddarmelt Burger",
      description: "Delicious cheddarmelt burger with chips or a side of your choice",
      price: 125.00
    },
    {
      id: 2,
      name: "Beef Burger",
      description: "Delicious BBQ 180g beef burger with chips or a side of your choice",
      price: 115.00
    },
    {
      id: 3,
      name: "Hawaiian Burger",
      description: "Delicious Hawaiian burger beef or chicken with chips or a side of your choice",
      price: 125.00
    }
    // ... Add more items as needed
  ];
  

const OrdersPage = () => {
  return (
    <div className="orders-page">
      <h2>Orders</h2>
      
      <MenuTabs />
      
      <div className="menu-items">
        {menuItemsData.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      
      <Cart />
    </div>
  );
}

export default OrdersPage;
