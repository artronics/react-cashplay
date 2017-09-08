import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../index';

describe('<App />', () => {
  it('should render the header', () => {
    expect(true).toBe(true);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
