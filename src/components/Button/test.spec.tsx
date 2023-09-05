import { Button } from '@/components/Button';
import { render, screen } from '@/utils/tests';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

describe('<Button />', () => {
    it('should render the medium size by default', () => {
        const { container } = render(<Button>Buy now</Button>);

        const button = screen.getByRole('button', { name: /Buy now/i });

        expect(button).toBeInTheDocument();
        expect(button).toHaveStyleRule('height', '4rem');
        expect(button).toHaveStyleRule('padding', '0.8rem 3.2rem');
        expect(button).toHaveStyleRule('font-size', '1.4rem');

        expect(container.firstChild).toMatchSnapshot();
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

    it('should render an icon version', () => {
        render(
            <Button icon={<AddShoppingCart data-testid="icon" />}>
                Buy now
            </Button>,
        );

        expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    });
});
