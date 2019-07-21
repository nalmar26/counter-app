
import Enzyme from 'enzyme';
import React from 'react';
import Counters from './counters';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('click Add and Reset Simulate',()=>{
    
    const wrapper = Enzyme.shallow(<Counters />);
    expect(wrapper.state().ids).toBe(4);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state().counters.length).toBe(5);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state().ids).toBe(4);
    expect(wrapper.state().counters.length).toBe(7);
    expect(wrapper.find('span').at(0).text()).toBe("4");
    wrapper.find('button').at(0).simulate('click').simulate('click');
    expect(wrapper.find('span').at(0).text()).toBe("0");
    expect(wrapper.state().ids).toBe(0);
});

test('click Inc and Dec Simulate',()=>{
    
    const wrapper = Enzyme.mount(<Counters />);
    expect(wrapper.state().ids).toBe(4);
    expect(wrapper.find('span').at(0).text()).toBe("4");
    wrapper.find('button').at(0).simulate('click').simulate('click');
    expect(wrapper.find('span').at(0).text()).toBe("0");
    expect(wrapper.state().ids).toBe(0);
    
    expect(wrapper.find('div').children().find('div').find('span').at(0).text()).toBe('zero');
    wrapper.find('div').children().find('div').find('button').at(0).simulate('click');
    expect(wrapper.find('div').children().find('div').find('span').at(0).text()).toBe('1');
    wrapper.find('div').children().find('div').find('button').at(0).simulate('click');
    expect(wrapper.find('div').children().find('div').find('span').at(0).text()).toBe('2');
    wrapper.find('div').children().find('div').find('button').at(1).simulate('click');
    expect(wrapper.find('div').children().find('div').find('span').at(0).text()).toBe('1');
});