import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Brewery from './Brewery';

describe('<Brewery />', () => {
  it('renders a BreweryCard with map prop set to true', () => {
    const location = {state: {
      brewery: '',
      googleMap: ''
    }}
    const wrapper = mount(
      <MemoryRouter>
        <Brewery location={location}/>
      </MemoryRouter>
    );
    expect(wrapper.find('BreweryCard').props().withMap).toEqual(true)
  })
  // it('renders GoogleMapReact with the right location', () => {
  //
  // })
})
