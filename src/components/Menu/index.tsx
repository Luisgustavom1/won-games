import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Logo } from '../Logo';

import * as S from './styles';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.Wrapper>
            <S.IconWrapper
                aria-label="Open Menu"
                onClick={() => setIsOpen(true)}
            >
                <MenuIcon />
            </S.IconWrapper>
            <S.LogoWrapper>
                <Logo $hiddenOnMobile />
            </S.LogoWrapper>
            <S.MenuGroup>
                <S.IconWrapper aria-label="Search">
                    <SearchIcon />
                </S.IconWrapper>
                <S.IconWrapper aria-label="Open Shopping Cart">
                    <ShoppingCartIcon />
                </S.IconWrapper>
            </S.MenuGroup>

            <S.MenuFull aria-hidden={!isOpen} $isOpen={isOpen}>
                <CloseIcon
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                />
            </S.MenuFull>
        </S.Wrapper>
    );
};
