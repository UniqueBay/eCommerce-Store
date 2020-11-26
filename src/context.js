import React, { Component } from 'react';
import { storeProducts } from "./data";
const ItemContext = React.createContext();


class ItemProvider extends Component {
	state ={
		products: [],
		detailProduct: storeProducts 
	};
	componentDidMount(){
		this.setProducts();
	}
	setProducts = () =>{
		let tempProducts = [];
		storeProducts.forEach(item =>{
			const singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		});
		this.setState(() =>{
			return{ products: tempProducts };
		});
	}
	handleDetails = () =>{
		console.log('hello from detail');
	};
	addToCart = () =>{
		console.log('hello from add to cart');
	};

    render() {
        return (
            <ItemContext.Provider value={{
														...this.state,
														handleDetails: this.handleDetails,
														addToCart: this.addToCart
												}}
												>
													{this.props.children}
												</ItemContext.Provider>
        )
    }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };
