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
    const address = `${brewery.street} ${brewery.city}, ${brewery.state}, ${brewery.postal_code}, ${brewery.country}`
    const wrapper = shallow(<BreweryCard brewery={brewery} />);
    expect(wrapper.find('CardText').text()).toEqual(address)
  })
})
