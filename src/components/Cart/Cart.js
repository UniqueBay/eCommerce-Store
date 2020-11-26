import React, { Component } from 'react';
import Title from "./Title";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import {ItemConsumer } from "../../context";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ItemConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.lenght > 0){
                            return (
                                <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColums />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ItemConsumer>
            </section>
        );
    }
}
