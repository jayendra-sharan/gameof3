import React from 'react';
import { shallow } from 'enzyme';
import Game from '.';
import gameServer from '../../mockData/gameServer';

describe ('Game landing page', () => {
  let component;
  beforeEach (() => {
    component = shallow (
                  <Game
                    thisPlayer={ gameServer.sample.player }
                    moves={[
                      gameServer.sample.move
                    ]}
                    opponent={ gameServer.sample.opponent } />
                );
  });

  it ('should render without crash', () => {
    expect (component.exists()).toBe (true);
  })
})