import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem'

import withProductFeed from '../../hoc/withProductFeed'
import withFilteredProductFeed from '../../hoc/withFilteredProductFeed'

import useDebounce from '../../hooks/useDebounce'

import ProductFeedStyle from '../../layout/product-feed/index'

export function ProductFeed({ products, filterProducts }) {
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    const onChangeHandle = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        filterProducts(debouncedSearch)
    }, [debouncedSearch])

    return (
        <ProductFeedStyle>
            <ProductFeedStyle.SearchBarContainer>
                <ProductFeedStyle.SearchBar
                    onChange={onChangeHandle}
                    type="text"
                    value={search}
                    placeholder="Search..."
                />
            </ProductFeedStyle.SearchBarContainer>
            <ProductFeedStyle.Container>
                <ProductFeedStyle.Row>
                    {products.loading ? 'Loading...' : ''}
                    {products.filteredData.length === 0 && !products.loading ? (
                        'Nothing found.'
                    ) : (
                        <>
                            {products.filteredData.map((product) => (
                                <CardItem
                                    key={product.id}
                                    {...product}
                                    src={'https://' + product.imageUrl}
                                    path={'https://' + product.url}
                                    price={product.price.current.text}
                                    text={product.name}
                                />
                            ))}
                        </>
                    )}
                </ProductFeedStyle.Row>
            </ProductFeedStyle.Container>
        </ProductFeedStyle>
    )
}

export default withProductFeed(withFilteredProductFeed(ProductFeed))
