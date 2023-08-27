import { render, screen } from '@/utils/tests';
import { Logo } from '@/components/Logo';

describe('<Logo />', () => {
    it('Should render a white label by default', () => {
        render(<Logo />);

        expect(
            screen.getByLabelText(/Won Games/i).parentElement,
        ).toHaveStyleRule('color', '#FAFAFA');
    });

    it('Should render a black label when color is passed', () => {
        render(<Logo color="black" />);

        expect(
            screen.getByLabelText(/Won Games/i).parentElement,
        ).toHaveStyleRule('color', '#030517');
    });

    it('Should render a bigger logo', () => {
        render(<Logo size="large" />);

        expect(
            screen.getByLabelText(/Won Games/i).parentElement,
        ).toHaveStyleRule('width', '20rem');
    });

    it('Should render a normal logo', () => {
        render(<Logo size="normal" />);

        expect(
            screen.getByLabelText(/Won Games/i).parentElement,
        ).toHaveStyleRule('width', '11rem');
    });

    it('Should render a logo without text on mobile if hiddenOnMobile', () => {
        render(<Logo $hiddenOnMobile size="large" />);

        expect(
            screen.getByLabelText(/Won Games/i).parentElement,
        ).toHaveStyleRule('width', '5.8rem', {
            media: '(max-width: 768px)',
        });
    });
});
