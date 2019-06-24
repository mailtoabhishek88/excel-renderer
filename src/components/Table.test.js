import React from 'react';
import { shallow} from 'enzyme';
import Table from './Table';

describe('Table Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Table debug/>);
    console.log('---------',Object.keys(component));
    expect(component).toMatchSnapshot();
  });
});