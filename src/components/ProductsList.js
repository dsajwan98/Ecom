import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ children, title }) => (
  <div>
    <h3>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList