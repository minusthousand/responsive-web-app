import styled from 'styled-components'

import Container from './Container'
import Icon from './Icon'
import Item from './Item'
import Logo from './Logo'
import Menu from './Menu'
import MenuIcon from './MenuIcon'

const HeaderStyle = styled.div`
    background: black;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: all 0.2s ease-out;
    opacity: ${(props) => (props.visibility === 'hidden' ? '0' : '100')};
`

HeaderStyle.Container = Container
HeaderStyle.Icon = Icon
HeaderStyle.Item = Item
HeaderStyle.Logo = Logo
HeaderStyle.Menu = Menu
HeaderStyle.MenuIcon = MenuIcon

export default HeaderStyle
