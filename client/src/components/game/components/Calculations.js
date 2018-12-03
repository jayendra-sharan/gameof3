/**
 * @fileoverview Calculations page. Displays the calculation in two rows.
 * 1. Row 1 the entire calculation [according to the game rule]
 * 2. Row 2 the number which has to be played with the next player.
 */
import React from 'react';
import GOT_CONST from '../../../constants/gotConstants';
import types from '../../../constants/types';

const Calculations = ({ oldPlayWith, input, newPlayWith }) => {
  const connector = `${input === 0 ? '+' : (input === 1 ? '+' : '')} ${input.toString()}`;
  return (
    <div className='calculation-container'>
      <div className='calc-row'>
        {`[( ${oldPlayWith} ${connector}) / ${GOT_CONST.DEFAULTS.NUM}]`}
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
