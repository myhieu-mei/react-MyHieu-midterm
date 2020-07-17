import React, {Component} from "react";
import {
  Card, CardImg,CardText, CardBody,
  CardTitle,  Button
} from 'reactstrap';


class ProductItem extends Component{

  render(){
	return(
			<Card className="ProductItem">
	       		<CardImg top width="100%" height="200px" src={this.props.item.image}/>
	        		<CardBody>
                    <CardTitle>{this.props.item.name}-{this.props.item.code} </CardTitle>
                    {this.props.item.oldPrice == "" && <CardText className="price">{this.props.item.price}$</CardText>}

                         {this.props.item.oldPrice &&  
				         <CardText className="price">{this.props.item.price}$  
                             
                         <span className="oldPrice">{this.props.item.oldPrice}$</span></CardText>	}
				         <Button outline color="info" onClick={this.props.onAddClick}>Đặt mua</Button>	 
						              
	        		</CardBody>
	        		</Card>
	        	
	     
	
			);
	}
}
export default ProductItem;