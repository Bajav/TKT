import React from 'react';
import Location from './places/location'
import Icon from './places/icon';

export default function Header() {
  return (
    <div className='header'>
        <Location />
        <Icon />
    </div>
  )
}