import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import * as S from './styles';
import { Logo } from '../Logo';

export const Menu = () => {
    return (
        <S.Wrapper>
            <S.IconWrapper aria-label="Open Menu">
                <MenuIcon />
            </S.IconWrapper>
            <S.LogoWrapper>
                <Logo $hiddenOnMobile />
            </S.LogoWrapper>
            <S.MenuGroup>
                <S.IconWrapper aria-label='Search'>
                    <SearchIcon />
                </S.IconWrapper>
                <S.IconWrapper aria-label="Open Shopping Cart">
                    <ShoppingCartIcon />
                </S.IconWrapper>
            </S.MenuGroup>
        </S.Wrapper>
    );
};
