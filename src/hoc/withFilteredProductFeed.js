import React from 'react'

export const withFilteredProductFeed = (WrappedComponent) => {
    return class WithFilteredProductFeed extends React.Component {
        state = {
            search: '',
            filteredProducts: [],
        }

        shouldComponentUpdate(nextProps, nextState) {
            return (
                this.props.products.data !== nextProps.products.data ||
                this.state.search !== nextState.search ||
                this.state.filteredProducts !== nextState.filterProducts
            )
        }

        componentDidUpdate(prevProps) {
            if (prevProps.products.data !== this.props.products.data) {
                this.setState({ filteredProducts: this.props.products.data })
            }
        }

        query = (searchTerm) => {
            this.setState({
                search: searchTerm,
                filteredProducts: this.filterProducts(searchTerm),
            })
        }

        filterProducts = (searchTerm) => {
            const { filteredProducts } = this.state
            if (searchTerm !== '') {
                return filteredProducts.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                )
            }
            return this.props.products.data
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    products={{
                        ...this.props.products,
                        filteredData: this.state.filteredProducts,
                    }}
                    filterProducts={this.query}
                />
            )
        }
    }
}

export default withFilteredProductFeed
