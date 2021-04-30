import React from 'react'

export const withProductFeed = (WrappedComponent) => {
    return class WithProductFeed extends React.PureComponent {
        state = {
            loading: false,
            data: [],
            error: null,
        }

        componentDidMount() {
            this.fetchData()
        }

        fetchData = () => {
            const url =
                'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=72&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US'
            this.dataFetchingRequest()
            return fetch(url, this.fetchOptions())
                .then((response) => response.json())
                .then((data) => this.dataFetchedSuccessfully(data.products))
                .catch((error) => this.dataFetchingError(error))
        }

        fetchOptions = () => ({
            method: 'GET',
            headers: {
                'x-rapidapi-key':
                    'b3d1c0e897mshc736278788c4eb2p16c811jsn381ed2afe749',
                'x-rapidapi-host': 'asos2.p.rapidapi.com',
            },
        })

        dataFetchingRequest = () => {
            this.setState({
                loading: true,
                data: [],
                error: null,
            })
        }

        dataFetchedSuccessfully = (data) => {
            this.setState({
                data,
                loading: false,
            })
        }

        dataFetchingError = (error) => {
            this.setState({
                error,
                loading: false,
            })
        }

        render() {
            return <WrappedComponent {...this.props} products={this.state} />
        }
    }
}

export default withProductFeed
