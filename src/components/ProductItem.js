import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product: {title, price, inventory}, onAddToCartClicked }) => {
  return <React.Fragment>
    <Product title={title} price={price} quantity={inventory}/>
    <button onClick={onAddToCartClicked} style={{cursor: 'pointer'}} disabled={!inventory? "disabled":""}>{inventory ? 'Add to cart' : 'Sold Out'}</button>
    </React.Fragment>

}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem