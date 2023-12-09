import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhoneList from './PhoneList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, country: 'Cameroon', country_code: '+237', number: '123456789' }])
  })
);

describe('PhoneList Component', () => {
  it('renders phone numbers correctly', async () => {
    render(<PhoneList />);

    await waitFor(() => {
      expect(screen.getByText('Cameroon - +237 123456789')).toBeInTheDocument();
    });
  });

  it('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch error'));

    render(<PhoneList />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching phone numbers: Fetch error')).toBeInTheDocument();
    });
  });
});
