import { Menu } from '@/components/Menu';
import { fireEvent, render, screen } from '@/utils/tests';

describe('<Menu />', () => {
    it('Should render menu', () => {
        render(<Menu />);

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        expect(
            screen.getByLabelText(/open shopping cart/i),
        ).toBeInTheDocument();
    });

    it('Should handle the open/close mobile menu', () => {
        render(<Menu />);

        const fullMenuElement = screen.getByRole('navigation', {
            hidden: true,
        });

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyleRule('opacity', '0');

        fireEvent.click(screen.getByLabelText(/open menu/i));
        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
        expect(fullMenuElement).toHaveStyleRule('opacity', '1');

        fireEvent.click(screen.getByLabelText(/close menu/i));
        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyleRule('opacity', '0');
    });
});
