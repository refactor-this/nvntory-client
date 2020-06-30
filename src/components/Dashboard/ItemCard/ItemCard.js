import React from 'react';

const ItemCard = ({ item }) => {
  console.log(item);
  const { name, description, price, cost } = item;

  return (
    <div className='card'>
      <div className='title'>{name}</div>
      <div className='description'>{description}</div>
      <span className='price'>{price}</span>
      <span className='cost'>{cost}</span>
      <button type='submit'>Edit</button>
    </div>
  );
};

export default ItemCard;