import React from 'react'

import ProductFeedStyle from '../layout/product-feed/index'

import useLocalStorage from '../hooks/useLocalStorage'

function CardItem(props) {
    console.log(props)
    const [like, setLike] = useLocalStorage(props.id, false)

    return (
        <ProductFeedStyle.Item>
            <ProductFeedStyle.ItemContainer>
                <ProductFeedStyle.Img alt="Product" src={props.src} />
                {like ? (
                    <ProductFeedStyle.LikeButton
                        liked
                        onClick={() => setLike(false)}
                    >
                        <ProductFeedStyle.LikeIcon
                            liked
                            className="fas fa-heart"
                        />
                    </ProductFeedStyle.LikeButton>
                ) : (
                    <ProductFeedStyle.LikeButton onClick={() => setLike(true)}>
                        <ProductFeedStyle.LikeIcon className="far fa-heart" />
                    </ProductFeedStyle.LikeButton>
                )}
                <ProductFeedStyle.Info>
                    <ProductFeedStyle.Text>{props.text}</ProductFeedStyle.Text>
                    <ProductFeedStyle.Text price>
                        {props.price}
                    </ProductFeedStyle.Text>
                </ProductFeedStyle.Info>
            </ProductFeedStyle.ItemContainer>
        </ProductFeedStyle.Item>
    )
}

export default CardItem
