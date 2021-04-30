import styled from 'styled-components'

import Title from './Title'
import Button from './Button'
import Container from './Container'
import Icon from './Icon'
import Text from './Text'
import Video from './Video'

const BannerStyle = styled.div`
    height: calc(100vh - 65px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
`

BannerStyle.Title = Title
BannerStyle.Button = Button
BannerStyle.Container = Container
BannerStyle.Icon = Icon
BannerStyle.Text = Text
BannerStyle.Video = Video

export default BannerStyle
