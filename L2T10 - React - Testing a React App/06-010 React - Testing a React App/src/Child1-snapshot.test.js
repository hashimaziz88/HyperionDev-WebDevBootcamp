import React from 'react';
import renderer from 'react-test-renderer'; // Install react-test-renderer
import Child1 from './components/Child1'; // Import your component

test('Child1 component snapshot', () => {
  const component = renderer.create(<Child1 />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
