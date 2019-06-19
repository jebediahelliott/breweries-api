import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import axios from 'axios';

describe('<App />', () => {
  it('requests breweries when it mounts', () => {
    const spy = jest.spyOn(axios, 'get');
    const wrapper = shallow(<App />);
    expect(spy).toHaveBeenCalled();
  })
  it('sets the state with the response from the API', async () => {
    const resp = {data: {breweries: [{name: 'Awesome Brewery'}, {name: 'Even Awesomer Brewery'}]}};
    const spy = jest.spyOn(axios, 'get');
    spy.mockResolvedValue(resp);
    const wrapper = await shallow(<App />);
    expect(wrapper.state('breweries')).toEqual(resp.data.breweries);
  })
})
