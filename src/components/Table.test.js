import React from 'react';
import { shallow, mount} from 'enzyme';
import Table from './Table';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Table debug/>);
    console.log('---------',Object.keys(component));
    expect(component).toMatchSnapshot();
  });

  it('should render correctly in "debug" mode', () => {
    const component = mount(<Table />);
    
    //component.sortBy();
    expect(component).toMatchSnapshot();
  });
});