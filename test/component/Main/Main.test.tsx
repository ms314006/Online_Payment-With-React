import * as React from 'react'
import { render, cleanup } from '@testing-library/react';
import Main from '../../../src/component/Main';

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('text', () => {
    const { getByTestId, container } = render(<Main />);
    console.log(container)
  });
});