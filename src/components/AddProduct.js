import React, { Component } from 'react';
import {
	Container, Row, form, input, labe
} from 'reactstrap';
import shortid from 'shortid';
class AddProduct extends Component {
    constructor(){
        super();
        let products = JSON.parse(localStorage.getItem("products"));
		if(!products){
			products = [];
		}
		
	  this.state = {
		  products: products
		  
	  };
	  this.onAddProduct=this.onAddProduct.bind(this);
	  this.onDeleteClick=this.onDeleteClick.bind(this);
       
    }

    onAddProduct(event){
        event.preventDefault();
        let id;
        let category = event.target["category"].value;
            let name = event.target["name"].value;
            let code = event.target["code"].value;
            let price = event.target["price"].value;
            let oldPrice = event.target["oldPrice"].value;
            let imagelink = event.target["imagelink"].value;
            let product= {
                id: shortid.generate(),
                category: category,
                name: name,
                code: code,
                price: price,
                oldPrice: oldPrice,
                image: imagelink,
                price: price
            }
            let products= JSON.parse(localStorage.getItem("products"));
            if(!products){
                products = [];
            }
            products.push(product);
            localStorage.setItem("products",JSON.stringify(products));
         
    }

    onDeleteClick(key){
        return(event)=>{
            let products =JSON.parse(localStorage.getItem("products"));
            products.splice(key, 1);
            localStorage.setItem("products",JSON.stringify(products));
    
            this.setState({
                 products:products
            });
            
         }
    }

    render(){
        
        return(
        <div>
            <form className="AddProduct" onSubmit={this.onAddProduct} >
		 <div className="form-row">
		    <div className="form-group col-md-3">
		      <label for="Name">Name Product</label>
		      <input type="text" class="form-control" name="name" placeholder="Name Product"/>
		    </div>
		     <div className="form-group col-md-3">
		      <label for="inputState">Category</label>
		      <select id="inputState" className="form-control" name="category">
		        <option value="Thoi Trang Nam">Thoi Trang Nam</option>
		        <option value="Thoi Trang Nu">Thoi Trang Nu</option>
		      </select>
    		</div>
		  </div>
	  
		  <div className="form-group col-md-6">
		    <label for="imagelink">Image</label>
		    <input type="text" className="form-control-file" name="imagelink" placeholder="Link image"/>
		  </div>
          <div class="form-group col-md-6">
	      <label >Code</label>
	      <input type="text" className="form-control" name="code"id="code"/>
	    	</div>
		  <div className="form-row">
		
	    	<div className="form-group col-md-3">
		    <label for="price">Price</label>
		    <input type="number" className="form-control" name="price" placeholder="Price"/>
		  </div>
          <div className="form-group col-md-3">
		    <label for="oldPrice">Old Price</label>
		    <input type="number" className="form-control" name="oldPrice" placeholder="oldPrice"/>
		  </div>
		</div>
		  <button type="submit" id="add" className="btn btn-primary" >Submit</button>
		</form>
<div>
<Container>
<table align="center" width="600px" border="1"  cellspacing="0" cellpadding="3" className="table table-hover table-bordered">
  <tr className="table-primary table-header" >
  
    <th>STT</th>
    <th >Name Product</th>
    <th >Code</th>
    <th >Category</th>
    <th >Image</th>
    <th >Price</th>
    <th >Old price</th>
    <th>Edit</th>
    <th >Delete</th>
  </tr>
 
	{this.state.products.map((item,key)=>(
		<tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.code}</td>
        <td>{item.category}</td>
        <td ><img src={item.image} height="75px;" width="75px;"/></td>
		<td>{item.price}</td>
        <td>{item.oldPrice}</td>
	
		<td>
		<div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onDeleteClick(key)}>Edit
            </button>
         </div>
         </td>
         <td>
		 <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onDeleteClick(key)}>Delete
             
            </button>
         </div>
		</td>
		</tr>
		)
		)}
			
  </table>
   </Container>
  </div>
        </div>
        );
    }
}
export default AddProduct;