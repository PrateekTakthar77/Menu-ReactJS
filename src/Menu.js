import React from 'react';
import './index.css';
const Menu = ({ items }) => {
  return <div>
    {items.map((menuIteams) => {
      const {id, title, img, desc, price} = menuIteams;
      return(
        <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo' />
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4 className='price'>{price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </article>
      );
    })}
  </div>;
};
// 1:34 time
export default Menu;