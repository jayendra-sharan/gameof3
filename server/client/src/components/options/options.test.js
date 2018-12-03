import React from 'react';
import { shallow, mount } from 'enzyme';
import Options from '.';
import gameServer from '../../mockData/gameServer';

describe ('Option component', () => {
  const mockFn = jest.fn ();
  let component = shallow (<Options
                      playerMode= { gameServer.sample.player.playerMode }
                      enableMove={ true }
                      onBtnClick={ mockFn }
                      playWith={ gameServer.sample.playWith }
                    />)

  it ('should contain 3 buttons to send user input', () => {
    expect (component.find ('.user-input-btn').length).toEqual (3);
  });

  it ('should submit response when clicked on any button', () => {
    component = mount (<Options
                        playerMode= { gameServer.sample.player.playerMode }
                        enableMove={ true }
                        onBtnClick={ mockFn }
                        playWith={ gameServer.sample.playWith }
                      />);

    expect (mockFn.mock.calls.length).toEqual (0);
    component.find ('.user-input-btn').at (0).simulate ('click');
    expect (mockFn.mock.calls.length).toEqual (1);
  });
});
