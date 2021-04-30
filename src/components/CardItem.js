import React from 'react'

import ProductFeedStyle from '../layout/product-feed/index'

import Button from '../ui/button/Button'

import useLocalStorage from '../hooks/useLocalStorage'

function CardItem(props) {
    console.log(props)
    const [like, setLike] = useLocalStorage(props.id, false)

    return (
        <ProductFeedStyle.Item>
            <ProductFeedStyle.ItemContainer>
                <ProductFeedStyle.Img alt="Product" src={props.src} />
                <ProductFeedStyle.Info>
                    <ProductFeedStyle.Text>{props.text}</ProductFeedStyle.Text>
                    <ProductFeedStyle.Text price>
                        {props.price}
                    </ProductFeedStyle.Text>
                    {like ? (
                        <Button onClick={() => setLike(false)}>Like</Button>
                    ) : (
                        <Button onClick={() => setLike(true)}>Dislike</Button>
                    )}
                </ProductFeedStyle.Info>
            </ProductFeedStyle.ItemContainer>
        </ProductFeedStyle.Item>
    )
}

export default CardItem
