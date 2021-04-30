import styled from 'styled-components'

import Icon from './Icon'
import Link from './Link'

const FooterStyle = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
`
FooterStyle.Link = Link
FooterStyle.Icon = Icon

export default FooterStyle
