/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App test', () => {
  it('should render home page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'This is home'
      );
    });
  });

  it('should render not found page', async () => {
    render(
      <MemoryRouter initialEntries={['/this-is-not-exist']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Not Found!'
      );
    });
  });

  it('should render back to home page', async () => {
    render(
      <MemoryRouter initialEntries={['/this-is-not-exist']}>
        <App />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText(/Go home/i));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'This is home'
    );
  });
});
