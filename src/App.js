import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {
  const [menuIteams, setmenuIteams] = useState(items);
  const [categories, setCotegories] = useState(allCategories);

  const filterIteams = (category) => {
    if (category === 'all') {
      setmenuIteams(items);
      return;
    }
    const newIteams = items.filter((items) => items.category === category);
    setmenuIteams(newIteams);
  }
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterIteams={filterIteams} />
      {/* iteams explain the diff between both */}
      <Menu items={menuIteams} />
    </section>
  </main>;
}

export default App;