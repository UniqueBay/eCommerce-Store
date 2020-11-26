import React, { Component } from 'react';
import { storeProducts } from "./data";
const ItemContext = React.createContext();


class ItemProvider extends Component {
	state ={
		products: [],
		detailProduct: storeProducts,
		cart: [],
		modalOpen: false,
		modalProduct: storeProducts,
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
	};

	getItem = id =>{
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handleDetails = id => {
		const product = this.getItem(id);
		this.setState(() => {
		return { detailProduct: product };
		});
	};
	addToCart = id =>{
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(() => {
			return { products: tempProducts, cart: [...this.state.cart, product] };
		},
		() => {
			console.log(this.state)
		});
	};
	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {modalProduct: product, modalOpen: true}
		})
	}
	closeModal = () => {
		this.setState(() => {
			return {modalOpen: false}
		})
	}

    render() {
        return (
            <ItemContext.Provider value={{
														...this.state,
														handleDetails: this.handleDetails,
														addToCart: this.addToCart,
														openModal: this.openModal,
														closeModal: this.closeModal
												}}
												>
													{this.props.children}
												</ItemContext.Provider>
        )
    }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };
