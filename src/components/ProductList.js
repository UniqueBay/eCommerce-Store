import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";
import { ItemConsumer } from "../context";


export default class ProductList extends Component {
    
    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="Items" />
                        <div className="row">
																									<ItemConsumer>
																										{value => {
																												return value.products.map( product =>{
																													return <Product key={product.id} product={product} />;
																												})
																										}}
																										</ItemConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                // 
        )
    }
}