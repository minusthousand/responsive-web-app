import React from 'react'

import FooterStyle from '../layout/footer/index'

function Footer() {
    return (
        <FooterStyle>
            Page developed by
            <FooterStyle.Link href="https://github.com/minusthousand">
                Mihails Tumasevics
                <FooterStyle.Icon className="fab fa-github" />
            </FooterStyle.Link>
        </FooterStyle>
    )
}

export default Footer
