import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button
} from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state= {
      menu: "products"
    }
this.onAddProductClicked=this.onAddProductClicked.bind(this);
this.onProductsClicked=this.onProductsClicked.bind(this);  }
  onAddProductClicked(){
    this.setState({
      menu: "add-product"
    })
  }
  onProductsClicked(){
    this.setState({
      menu: "products"
    })
  }
  

render(){
  return(
    
    <div className="App">
      <div className="menu">
        <Button outline color="info" onClick={this.onProductsClicked}>Products</Button>
        <Button outline color="danger" onClick={this.onAddProductClicked}>Add-product</Button>
      </div>
      <br/>
      <hr/>
      <br/>
      {this.state.menu =="products" ? <Products /> :null}
      {this.state.menu =="add-product" ?  <AddProduct/> :null}
     
    </div>
  )
}
}
export default App;
