import React from 'react'
import { useState } from 'react'
import useScrollEvent from '../../hooks/useScrollEvent'

import HeaderStyled from '../../layout/header/index'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(false)

    const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMobileMenu = () => setIsMenuOpen(false)

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleNavigateHome = () => {
        closeMobileMenu()
        scrollToHome()
    }

    const changeNavbarVisibility = () => {
        if (window.scrollY >= 65) {
            return setIsHeaderVisible(true)
        }
        return setIsHeaderVisible(false)
    }

    useScrollEvent(changeNavbarVisibility)

    return (
        <HeaderStyled visibility={isHeaderVisible ? 'visible' : 'hidden'}>
            <HeaderStyled.Container>
                <HeaderStyled.Logo onClick={handleNavigateHome}>
                    PRODUCT PAGE
                    <HeaderStyled.Icon className="fas fa-store"></HeaderStyled.Icon>
                </HeaderStyled.Logo>
                <HeaderStyled.MenuIcon onClick={toggleMobileMenu}>
                    <HeaderStyled.Icon
                        menu
                        className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}
                    />
                </HeaderStyled.MenuIcon>
                <HeaderStyled.Menu
                    isActive={isMenuOpen ? 'active' : 'unactive'}
                >
                    <HeaderStyled.Item onClick={handleNavigateHome}>
                        Home
                    </HeaderStyled.Item>
                </HeaderStyled.Menu>
            </HeaderStyled.Container>
        </HeaderStyled>
    )
}

export default Header
