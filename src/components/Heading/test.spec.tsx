import { render, screen } from '@/utils/tests';
import { Heading } from '@/components/Heading';

describe('<Heading />', () => {
    it('Should render a black heading by default', () => {
        render(<Heading>Won Games</Heading>);

        expect(
            screen.getByRole('heading', { name: /Won Games/i }),
        ).toHaveStyleRule('color', '#030517');
    });

    it('Should render a white heading when color is passed', () => {
        render(<Heading color="white">Won Games</Heading>);

        expect(
            screen.getByRole('heading', { name: /Won Games/i }),
        ).toHaveStyleRule('color', '#FAFAFA');
    });

    it('Should render a heading with a line at the left side', () => {
        render(<Heading $lineBottom>Won Games</Heading>);

        expect(
            screen.getByRole('heading', { name: /Won Games/i }),
        ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
            modifier: '::after',
        });
    });
});
