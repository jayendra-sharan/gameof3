import React from 'react';
import GOT_CONST from '../../../constants/gotConstants';
import types from '../../../constants/types';

const Calculations = ({ oldPlayWith, input, newPlayWith }) => {
  return (
    <div className='calculation-container'>
      <div className='calc-row'>
        {`[( ${oldPlayWith} ${input === 0 ? '+' : (input === 1 ? '+' : '')} ${input.toString()}) / ${GOT_CONST.DEFAULTS.NUM}]`}
      </div>
      <div className='calc-row'>
        { newPlayWith }
      </div>
    </div>
  )
}

Calculations.prototype = {
  oldPlayWith: types.playWith.isRequired,
  newPlayWith: types.playWith.isRequired,
  input: types.input.isRequired
}

export default Calculations;
