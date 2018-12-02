import React from "react";
import { shallow, mount } from "enzyme";
import Login from ".";

describe ('Login Component', () => {
  let component;
  const submitMock = jest.fn ();
  beforeEach (() => {
    component = shallow (
                  <Login
                    availableGameCount={0}
                    enableJoin={false}
                    submitForm={submitMock} />
                );
  });

  it ('should render successfully', () => {
    expect (component.exists ()).toEqual (true);
  });

  it ('should have an input for nick name', () => {
    expect (component.find ('.nick-name').length).toEqual (1);
  });

  it ('should have two radio input to select the player mode', () => {
    expect (component.find ('.player-mode').length).toEqual (2);
  });

  it ('should have two radio inputs to select the game enter mode', () => {
    expect (component.find ('.game-mode').length).not.toBeLessThan (1);
  });

  it ('should have a button to click to enter the game', () => {
    expect (component.find ('.enter-game').length).toEqual (1);
  });

  it ('should submit the form when submit button is clicked', () => {
    component = mount (
                  <Login
                    availableGameCount={0}
                    submitForm={ submitMock } />
                );
    expect (submitMock.mock.calls.length).toEqual (0);
    component.find ('.enter-game').simulate ('submit');
    expect (submitMock.mock.calls.length).toEqual (1);
  })

});
