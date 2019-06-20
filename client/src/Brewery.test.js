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
    it('renders GoogleMapReact with the provided coordinates', () => {
      const location = {state: {
        brewery: {
          latitude: '0',
          longitude: '0'
        },
        googleMap: ''
      }}
      const wrapper = mount(
        <MemoryRouter>
          <Brewery location={location}/>
        </MemoryRouter>
      );
      expect(wrapper.find('GoogleMap').props().defaultCenter).toEqual({lat: 0, lng: 0})
    })
    it('renders GoogleMapReact with a default coordinates when none are given', () => {
      const location = {state: {
        brewery: {
          latitude: null,
          longitude: null
        },
        googleMap: ''
      }}
      const wrapper = mount(
        <MemoryRouter>
          <Brewery location={location}/>
        </MemoryRouter>
      );
      expect(wrapper.find('GoogleMap').props().defaultCenter).toEqual({lat: 40.2732, lng: -76.8867})
    })
    it('renders MapMarker with provided coordinates and the brewery name', () => {
      const location = {state: {
        brewery: {
          name: 'Super Cool Brewery',
          latitude: '0',
          longitude: '0'
        },
        googleMap: ''
      }}
      const wrapper = mount(
        <MemoryRouter>
          <Brewery location={location}/>
        </MemoryRouter>
      );
      expect(wrapper.find('MapMarker').props().lat).toEqual(0)
      expect(wrapper.find('MapMarker').props().lng).toEqual(0)
      expect(wrapper.find('MapMarker').props().text).toEqual('Super Cool Brewery')
    })
    it('renders MapMarker with default information if no coordinates are given', () => {
      const location = {state: {
        brewery: {
          latitude: null,
          longitude: null
        },
        googleMap: ''
      }}
      const wrapper = mount(
        <MemoryRouter>
          <Brewery location={location}/>
        </MemoryRouter>
      );
      expect(wrapper.find('MapMarker').props().lat).toEqual(40.2732)
      expect(wrapper.find('MapMarker').props().lng).toEqual(-76.8867)
      expect(wrapper.find('MapMarker').props().text).toEqual("This brewery doesn't have a location yet")
    })
  })
