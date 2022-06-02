import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

test('matches home snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
