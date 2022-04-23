import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index.ts';

describe('<Footer />', () => {
  it('should mention React', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.text()).toContain('React');
  });
});
