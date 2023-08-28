import { render, screen } from '@testing-library/react';
import MediaMatch from '@/components/MediaMatch';

describe('<MediaMatch />', () => {
    let desktopElement: Element;
    let mobileElement: Element;

    beforeEach(() => {
        render(
            <>
                <MediaMatch $greaterThan="medium" data-testid="desktop">
                    <h1>Desktop</h1>
                </MediaMatch>
                <MediaMatch $lessThan="medium" data-testid="mobile">
                    <h1>Mobile</h1>
                </MediaMatch>
            </>,
        );

        desktopElement = screen.getByTestId('desktop');
        mobileElement = screen.getByTestId('mobile');
    });

    it('should be hidden if no media query is passed', () => {
        expect(desktopElement).toHaveStyleRule('display', 'none');
        expect(mobileElement).toHaveStyleRule('display', 'none');
    });

    it.skip('should show or hide based on the media query', () => {
        expect(desktopElement).toHaveStyleRule('display', 'block', {
            media: '(min-width: 768px)',
        });
        expect(mobileElement).toHaveStyleRule('display', 'block', {
            media: '(max-width:768px)',
        });
    });
});
