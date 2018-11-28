import React from 'react';
import Counter from '../../../../components/counter/counter.js';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Counter/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('transfers state to DOM on decrement', () => {
    let app = mount(<Counter />);
    let link = app.find('.down');
    link.simulate('click');
    expect(app.find('span').text()).toBe('-1');
  });

  it('transfers state to DOM on increment', () => {
    let app = mount(<Counter />);
    let link = app.find('.up');
    link.simulate('click');
    expect(app.find('span').text()).toBe('1');
  });

  it('changes state on decrement', () => {
    let app = mount(<Counter />);
    let link = app.find('.down');
    link.simulate('click');
    expect(app.state('count')).toBe(-1);
  });

  it('changes state on increment', () => {
    let app = mount(<Counter />);
    let link = app.find('.up');
    link.simulate('click');
    expect(app.state('count')).toBe(1);
  });
});
