import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Search from '../Search/Search';

afterEach(cleanup);

const setup = () => {
  const utils = render(<Search />)
  const input = utils.getByPlaceholderText('City or State name...');
  return {
    input,
    ...utils,
  }
}

test('Query input should change to a city', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Madison' }});
    expect(input.value).toBe('Madison');
})