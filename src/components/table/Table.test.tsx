import { render, screen } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import { useQuery } from '@apollo/client';
import { Table } from './index';
import { useFilters } from '../../hooks/useFilters';

vi.mock('@apollo/client', () => ({
  useQuery: vi.fn(),
}));

vi.mock('../../hooks/useFilters', () => ({
  useFilters: vi.fn(),
}));

describe('Table Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders table with data', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'US' } });
    (useQuery as Mock).mockReturnValue({
      data: { countries: [{ code: 'US', name: 'United States' }] },
      loading: false,
    });

    render(<Table />);

    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  test('renders skeleton loader when loading', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'US' } });
    (useQuery as Mock).mockReturnValue({
      data: { countries: [] },
      loading: true,
    });

    render(<Table />);

    expect(screen.getAllByTestId('skeleton-loader').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('skeleton-loader').length).toBe(10);
  });

  test('renders no search results message', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'CANTBEFOUND'} });
    (useQuery as Mock).mockReturnValue({
      data: { countries: [] },
      loading: false,
    });

    render(<Table />);

    expect(screen.getByText('No search results')).toBeInTheDocument();
  });
});