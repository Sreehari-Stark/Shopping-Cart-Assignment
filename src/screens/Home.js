import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import ProductList from '../Components/ShoppingList';
import { items } from '../JSON/JSONData.json';
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInputActive: false,
    };
  }

  componentDidMount() {
    console.log('Home screen mounted', this.props);
    this.props.dispatch({ type: 'ADD_ITEMS', payload: items });
  }

  handleSearchButton = () => {
    console.log('handleSearchButton');
    this.setState({ isSearchInputActive: !this.state.isSearchInputActive });
  };

  render() {
    const { products } = this.props;
    const { isSearchInputActive } = this.state;

    return (
      <div style={{ backgroundColor: '#ccc' }}>
        <Header
          isActive={isSearchInputActive}
          handleInputClick={this.handleSearchButton}
        />
        <div style={{
          marginTop:'10px',
          marginRight:'150px',
          padding:'10px'
        }}>
         
               <span className="sortName">SORT BY : </span>
               <span className="high-low">Price--High Low</span> 
               <span className="low-high">Price--Low High</span>
               <span className="discount">Discount</span>
                       
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems:'center',
            padding: '0 20px',
            marginTop:'30px'
          }}
        >
          <div
            style={{
              width: '25%',
              height: '200px',
              border: '1px solid black',
              padding: '10px',
              marginTop:'10px',
              fontWeight:"bold"
            }}
          >
            Filters
            <div className="RangeSlider">
            <mobiscroll.Slider value={20} min={0} max={85000} step={1000} data-tooltip="true" ></mobiscroll.Slider>
            <input type="button" value="APPLY"></input>
            </div>
          </div>
          <div style={{}}>
            <ProductList data={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Home);
