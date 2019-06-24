import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Row debug />);
  
    expect(component).toMatchSnapshot();
  });
});