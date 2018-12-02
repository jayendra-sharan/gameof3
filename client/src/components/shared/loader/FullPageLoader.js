import React from 'react';

import './loader.scss';

const FullPageLoader = ({ transparent }) => {
  return (
    <div className={ `loader-container ${ transparent ? 'is-transparent' : ''}` }>
      <div className="LoaderBalls">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
    </div>
  );
}

export default FullPageLoader;
