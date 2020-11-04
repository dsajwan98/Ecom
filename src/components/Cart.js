import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, nodes }) => {
  console.log('products', products)
  // Cart component should display total products
  // It should display a message "You can add some products to cart."
  // When product is added it should display title, price and quantity.
  // When checkout is clicked the cart should be refreshed and the button should be disabled.
  return (
    <React.Fragment>
      <h3>Your Cart</h3>
      {!products.length ? <em>You can add some products to cart.</em> : <React.Fragment>
      <div>{nodes}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {products.map(({price, title, quantity}, indx) => <Product key={indx} price={price} title={title} quantity={quantity}/>)}
      </div>
      </React.Fragment>}
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled= {!products.length ? "disabled":""}
      >Checkout
      </button>
    </React.Fragment>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart