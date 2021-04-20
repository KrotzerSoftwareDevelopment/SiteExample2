import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some Amazing Occurrences!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Halleys Comet - Rare Visitor'
              label='last occurrence - 1986'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Star Nursery'
              label='Last Occurrence 2006'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Saturns massive storms occur every 20 to 30 years!'
              label='last occurrence 2010'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='3 of Saturns largest moons make an eclipes called the triple jovain eclipse'
              label='last occurrence 2015'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Leonid Meteor Storms - named after its origin, the leo constellation!'
              label='last occurrence 2010'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
