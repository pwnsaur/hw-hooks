import { useState, useEffect } from 'react';

const Items = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log('update');
  }, [getItems]);

  return items.map(item => <div key={item}>{item}</div>);
};

export default Items;
