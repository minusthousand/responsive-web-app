import React from 'react'

import BannerStyle from '../../layout/banner/index'
import Button from '../../ui/button/Button'

export function Banner() {
    const scrollToProducts = () => {
        window.scrollTo({
            top: 750,
            behavior: 'smooth',
        })
    }

    return (
        <BannerStyle>
            <BannerStyle.Video src="/videos/video.mp4" autoPlay loop muted />
            <BannerStyle.Title>
                Shoes you've been dreaming of.
            </BannerStyle.Title>
            <BannerStyle.Text>Check them right away!</BannerStyle.Text>
            <BannerStyle.Button>
                <Button
                    large
                    outlined
                    onClick={scrollToProducts}
                    className="btns"
                >
                    PRODUCTS
                    <BannerStyle.Icon className="fas fa-angle-down" />
                </Button>
            </BannerStyle.Button>
        </BannerStyle>
    )
}

export default Banner
