import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BreweryList from './BreweryList';

describe('<BreweryList />', () => {
  it('renders a title card', () => {
    const wrapper = shallow(<BreweryList />);
    expect(wrapper.find('CardTitle').text()).toEqual('Breweries of Harrisburg Pennsylvania')
  });
  it('renders a card for each brewery', () => {
    const breweries = [{name: 'House of Suds', id: 1}, {name: 'Hop Heaven', id: 2}];
    const wrapper = mount(
      <MemoryRouter>
        <BreweryList breweries={breweries} />
      </MemoryRouter>
      );
    expect(wrapper.find('Card').length).toEqual(3);
  });
});
