import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Header />
        {cart.map((item) => {
          return (
            <div style={{ backgroundColor: 'red', margin: '1rem' }}>
              {JSON.stringify(item)}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
