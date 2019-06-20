import React from 'react';
import { shallow } from 'enzyme';
import BreweryCard from './BreweryCard';

describe('<BreweryCard />', () => {
  const brewery = {
    name: "Boneshire Brew Works",
    brewery_type: "micro",
    street: "7462 Derry St",
    city: "Harrisburg",
    state: "Pennsylvania",
    postal_code: "17111-5228",
    country: "United States",
    longitude: "-76.8712077",
    latitude: "40.2633825",
    phone: "7174127814",
    website_url: "http://www.boneshire.com"
  };
  it('displays the brewery name', () => {
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('CardTitle').text()).toEqual(brewery.name)
  })
  it('displays the brewery type', () => {
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('CardSubtitle').text()).toEqual(brewery.brewery_type)
  })
  it('displays the brewery address', () => {
    const address = `${brewery.street} ${brewery.city}, ${brewery.state}, ${brewery.postal_code}, ${brewery.country}`;
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('CardText').text()).toEqual(address);
  })
  it('displays a button to view the brewery website', () => {
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('Button').at(1).text()).toEqual('Brewery Website')
    expect(wrapper.find('a').props().href).toEqual(brewery.website_url)
  })
  it('displays a button to view the map page if it not on the map page', () => {
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('Button').at(0).text()).toEqual('View Map')
    expect(wrapper.find('#mapLink').props().to.pathname).toEqual(`/${brewery.name}`)
  })
  it('displays a button to go back to the brewery page if it is on the map page', () => {
    const wrapper = shallow(<BreweryCard brewery={brewery} withMap={true} />);
    expect(wrapper.find('Button').at(0).text()).toEqual('Back to Breweries')
    expect(wrapper.find('#mapLink').props().to.pathname).toEqual('/')
  })
})
