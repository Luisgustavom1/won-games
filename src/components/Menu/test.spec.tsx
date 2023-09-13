import { Menu } from '@/components/Menu';
import { render, screen } from '@/utils/tests';

describe('<Menu />', () => {
    it('Should render menu', () => {
        render(<Menu />);

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    });
});
