import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';


describe('Row Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Row debug />);
  
    expect(component).toMatchSnapshot();
  });
});