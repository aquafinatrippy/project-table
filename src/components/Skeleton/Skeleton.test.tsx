import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SkeletonLoader } from './index';

describe('SkeletonLoader', () => {
    beforeEach(() => {
        vi.clearAllMocks();
      });

    it('renders with default width and height', () => {
        render(<SkeletonLoader />);
        const skeletonElement = screen.getByTestId('skeleton-loader');
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveStyle({ width: '100%', height: '60px' });
    });

    it('renders with custom width and height', () => {
        render(<SkeletonLoader width="50%" height={100} />);
        const skeletonElement = screen.getByTestId('skeleton-loader');
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveStyle({ width: '50%', height: '100px' });
    });

    it('renders with custom width only', () => {
        render(<SkeletonLoader width="75%" />);
        const skeletonElement = screen.getByTestId('skeleton-loader');
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveStyle({ width: '75%', height: '60px' });
    });

    it('renders with custom height only', () => {
        render(<SkeletonLoader height={80} />);
        const skeletonElement = screen.getByTestId('skeleton-loader');
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveStyle({ width: '100%', height: '80px' });
    });
});