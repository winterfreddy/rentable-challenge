import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SearchResults from '../Search/SearchResults';

afterEach(cleanup);

const mockProps = {
    id: 1,
    lat: "43.0752983",
    lng: "-89.393898",
    name: "Madison",
    state_abrv: "WI",
    state_name: "Wisconsin",
    url: "https://www.rentable.co/madison-wi"
}

const setup = () => {
  const utils = render(<SearchResults results={mockProps}/>);
  const label = utils.getByText('CITY: Madison');
  return {
    label,
    ...utils,
  }
}

test('Queried search renders one result', () => {
    const { label } = setup();
    expect(label).toBe('Madison');
})