import React, { Component } from "react";

import ProductItem from './ProductItem';
import {
	Container, Row
} from 'reactstrap';

class Products extends Component {
	constructor(props) {
		super(props);
		this.products = JSON.parse(localStorage.getItem("products"));
		if (!this.products) {
			this.products = [];
		}
	}

	onOrderClick(item){
			return (event) => {
				alert("Thank you your order")
			}
		}
	render() {
		return (
			<div >
				<Container>
					<Row className="home">
						{this.products.map((item, key) => <ProductItem onAddClick={this.onOrderClick(item)}
							item={item} key={key} />
						)}
					</Row>
				</Container>
			</div>

		);
	}
}
export default Products;