import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => {
  return <div style={{border: '1px solid black', width: 'max-content', padding: '10px', listStyleType: 'none', margin: '10px'}}>
      <div>{quantity ? `${title} - $${price} x ${quantity}` : `${title} - $${price}`}</div>
  </div>
}
Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
