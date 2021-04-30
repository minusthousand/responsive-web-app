import styled from 'styled-components'

import Container from './Container'
import Img from './Img'
import Info from './Info'
import Item from './Item'
import ItemContainer from './ItemContainer'
import Row from './Row'
import SearchBar from './SearchBar'
import SearchBarContainer from './SearchBarContainer'
import Text from './Text'
import LikeButton from './LikeButton'
import LikeIcon from './LikeIcon'

const ProductFeedStyle = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    width: 100%;
    background-color: white;
`

ProductFeedStyle.Container = Container
ProductFeedStyle.Img = Img
ProductFeedStyle.Info = Info
ProductFeedStyle.Item = Item
ProductFeedStyle.ItemContainer = ItemContainer
ProductFeedStyle.Row = Row
ProductFeedStyle.SearchBar = SearchBar
ProductFeedStyle.SearchBarContainer = SearchBarContainer
ProductFeedStyle.Text = Text
ProductFeedStyle.LikeButton = LikeButton
ProductFeedStyle.LikeIcon = LikeIcon

export default ProductFeedStyle
