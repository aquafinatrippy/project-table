import { render, screen } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import { Table } from './index';
import { useFilters } from '../../hooks/useFilters';

vi.mock('../../hooks/useFilters', () => ({
  useFilters: vi.fn(),
}));

describe('Table Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders table with data', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'US' } });

    const data = { countries: [{ code: 'US', name: 'United States' }] };
    const loading = false;

    render(<Table data={data.countries} loading={loading} />);

    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  test('renders skeleton loader when loading', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'US' } });

    const data = { countries: [] };
    const loading = true;

    render(<Table data={data.countries} loading={loading} />);

    expect(screen.getAllByTestId('skeleton-loader').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('skeleton-loader').length).toBe(10);
  });

  test('renders no search results message', () => {
    (useFilters as Mock).mockReturnValue({ filters: { code: 'CANTBEFOUND'} });

    const data = { countries: [] };
    const loading = false;

    render(<Table data={data.countries} loading={loading} />);

    expect(screen.getByText('No search results')).toBeInTheDocument();
  });
});