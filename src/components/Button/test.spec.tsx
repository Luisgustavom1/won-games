import { render, screen } from '@testing-library/react';
import { Button  } from '@/components/Button';

describe('<Button />', () => {
    it('Should render heading', () => {
        render(<Button />);

        expect(screen.getByRole('heading', { name: /Button/i }))
        .toBeInTheDocument();
    });
});
