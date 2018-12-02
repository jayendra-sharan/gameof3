import React from 'react';
import { shallow } from 'enzyme';
import Game from '.';

describe ('Game landing page', () => {
  let component;
  beforeEach (() => {
    component = shallow (
                  <Game
                    thisPlayerId='random-string'
                    thisGameId='random-string'
                    opponent='bigtuna'
                    startGameWith={19}/>
                );
  });

  it ('should render without crash', () => {
    expect (component.exists()).toBe (true);
  })
})