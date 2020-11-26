import React, { Component } from 'react';
import { storeProducts } from "./data";
const ItemContext = React.createContext();


class ItemProvider extends Component {
	state ={
		products: storeProducts,
		detailProduct: storeProducts 
	}
	handleDetails = () =>{
		console.log('hello from detail');
	}
	addToCart = () =>{
		console.log('hello from add to cart');
	}

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
