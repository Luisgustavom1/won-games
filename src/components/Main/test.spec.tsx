import { render, screen } from '@testing-library/react';
import { Main } from '@/components/Main';

describe('<Main />', () => {
    it('Should render heading', () => {
        const { container } = render(<Main />);

        expect(
            screen.getByRole('heading', { name: /won games/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId('main')).toHaveStyleRule('#123121');
        expect(container.firstChild).toMatchSnapshot();
    });
});
