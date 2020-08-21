import React from 'react';
import sign from './sign.png';

function HomePage() {
  return (
    <div>
      <h1>Alexandr Sapalsky</h1>
      <h2>Junior Front-end developer</h2>
      <p>
        Welcome to my site. Here you can find out who I am and what I can do.
      </p>
      <img src={sign} alt='sign' />
    </div>
  );
}

export default HomePage;
