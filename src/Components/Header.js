import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../Components/Input';

class Header extends Component {
  render() {
    const { cart, isActive } = this.props;
    console.log(isActive, 'isActive');
    return (
      <header>
        <div
          style={{
            backgroundColor: 'dodgerblue',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <NavLink className="text" exact activeClassName="active" to="/">
              <i
                className="fas fa-star"
                style={{ color: 'yellow', fontSize: '30px' }}
              />
            </NavLink>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isActive ? (
              <div style={{ display: 'flex', borderBottom: '1px solid white' }}>
                <input
                  type="text"
                  placeholder="Search the product"
                  style={{ width: '10rem', color: '#fff' }}
                />
                <div onClick={this.props.handleInputClick}>
                  <i
                    className="fas fa-search"
                    style={{
                      color: '#fff',
                      fontSize: '30px',
                      padding: '0px 10px',
                    }}
                  />
                </div>
              </div>
            ) : (
              <div onClick={this.props.handleInputClick}>
                <NavLink to="/">
                  <i
                    className="fas fa-search"
                    style={{
                      color: '#fff',
                      fontSize: '30px',
                      padding: '0px 10px',
                      borderBottom: '1px solid transparent',
                    }}
                  />
                </NavLink>
              </div>
            )}
            <div style={{ position: 'relative' }}>
              <NavLink to="/cart">
                {cart.length > 0 && (
                  <p
                    style={{
                      position: 'absolute',
                      left: '60%',
                      top: '-20%',
                      backgroundColor: 'red',
                      padding: '0.1rem 0.3rem',
                      borderRadius: '100%',
                      fontSize: '0.9rem',
                      color: '#fff',
                      fontWeight: '800',
                    }}
                  >
                    {cart.length}
                  </p>
                )}
                <i
                  className="fas fa-shopping-cart"
                  style={{
                    color: '#fff',
                    fontSize: '30px',
                    padding: '0px 10px',
                  }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartItems,
  };
};

export default connect(mapStateToProps)(Header);
