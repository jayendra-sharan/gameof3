import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe ('App', () => {
  it ('should render without crashing', () => {
    const mockFn = jest.fn ();
    const component = shallow (
                        <App
                          fetchingAvailableGameCount={ false }
                          fetchAvailableGameCountFailed={ false }
                          availableGameCount={ 0 }
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