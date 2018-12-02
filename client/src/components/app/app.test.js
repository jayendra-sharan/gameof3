import React from 'react';
import { shallow } from 'enzyme';
import App from '.';
import gameServer from '../../mockData/gameServer';

describe ('App', () => {
  it ('should render without crashing', () => {
    const mockFn = jest.fn ();
    const component = shallow (
                        <App
                          fetchingAvailableGameCount={ false }
                          fetchAvailableGameCountFailed={ false }
                          availableGameCountAuto={ gameServer.gameCount.data.availableGameCountAuto }
                          availableGameCountManual={ gameServer.gameCount.data.availableGameCountManual }
                          registerPlayerFailed={ false }
                          registeringPlayer={ false }
                          thisPlayerId='random'
                          submitForm={ mockFn }
                          getAvailableGameCount={ mockFn }
                          />
                      );
    expect (component.exists ()).toEqual (true);
  });
});