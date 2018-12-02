import React from 'react';

import './loader.scss';

const FullPageLoader = ({ text, transparent }) => {
  return (
    <div className={ `loader-container ${ transparent ? 'is-transparent' : ''}` }>
      { text && <div className='loader-text'>{ text }</div> }
      <div className="LoaderBalls">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
    </div>
  );
}

export default FullPageLoader;
