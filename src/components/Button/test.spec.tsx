import { Button } from '@/components/Button';
import { render, screen } from '@/utils/tests';

describe('<Button />', () => {
    it('should render the medium size by default', () => {
        render(<Button>Buy now</Button>);

        const button = screen.getByRole('button', { name: /Buy now/i });

        expect(button).toBeInTheDocument();
        expect(button).toHaveStyleRule('height', '4rem');
        expect(button).toHaveStyleRule('padding', '0.8rem 3.2rem');
        expect(button).toHaveStyleRule('font-size', '1.4rem');
    });

    it('should render the small size', () => {
        render(<Button $size="small">Buy now</Button>);

        const button = screen.getByRole('button', { name: /Buy now/i });

        expect(button).toHaveStyleRule('height', '3rem');
        expect(button).toHaveStyleRule('padding', '0.8rem');
        expect(button).toHaveStyleRule('font-size', '1.2rem');
    });

    it('should render the large size', () => {
        render(<Button $size="large">Buy now</Button>);

        const button = screen.getByRole('button', { name: /Buy now/i });

        expect(button).toHaveStyleRule('height', '5rem');
        expect(button).toHaveStyleRule('padding', '0.8rem 4.8rem');
        expect(button).toHaveStyleRule('font-size', '1.6rem');
    });

    it('should render a fullWidth version', () => {
        render(<Button $fullWidth>Buy now</Button>);

        expect(
            screen.getByRole('button', { name: /Buy now/i }),
        ).toHaveStyleRule('width', '100%');
    });
});
