import React from 'react';
import logo from './logo.svg';
import './App.css';
import mock from './mock.json';
import ProductDescription from './ProductDescription';

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mock:mock,
      clickBuy:0
    }
  }
  setclickOnBuy=(index)=>{
    let oldIndex = this.state.clickBuy;
    this.setState({
      clickBuy:oldIndex+1
    })
  }
        render(){
          let rows = []
          this.state.mock.forEach((data)=>{
              rows.push(<ProductDescription setclickOnBuy={this.setclickOnBuy} data={data}/>)
          })
          console.log(this.state.mock)
        return (
          <div className="container">
            <div className="Shopping-title text-center">
              <h2> Welcome to Shopping Cart </h2>
              </div>
            <div className="shopping-card">
            <div className="cart-info text-right">
                <h2>Total Item = {this.state.clickBuy} </h2>
            </div>
            <div className="product-detail">
              {rows}
            </div>
            </div>  
          </div>
        );
      }

}
export default App;
