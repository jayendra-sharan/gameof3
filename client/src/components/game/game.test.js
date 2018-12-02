import React from 'react';
import { shallow } from 'enzyme';
import Game from '.';

describe ('Game landing page', () => {
  let component;
  beforeEach (() => {
    component = shallow (
                  <Game
                    thisPlayer={{
                      playerId: 'random-id',
                      playerStatus: 'I',
                      playerMode: 'A',
                      'nickname': 'this-player'
                    }}
                    thisGameId='random-string'
                    opponent='bigtuna'
                    startGameWith={19}/>
                );
  });

  it ('should render without crash', () => {
    expect (component.exists()).toBe (true);
  })
})