import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:"product",
    initialState:{
        cart:{ counter:0, cartProducts:[]},
        products:[],
    },
    reducers:{
        addProducts:(state,{payload})=>{
            state.products = payload
        },
        addToCart:(state,{payload})=>{

            const index = state.cart.cartProducts.findIndex((prod)=> prod._id == payload._id )
            const p = state.cart.cartProducts[index]

            if(index != -1){
                alert("Already added in cart")
            }else{
                state.cart.cartProducts.push({...payload})
                state.cart.counter = state.cart.cartProducts.length 
                alert("added to cart")
            }
        },
        removeFromCart:(state,{payload})=>{
            const index = state.cart.cartProducts.findIndex((prod)=> prod._id == payload._id)
            state.cart.cartProducts.splice(index,1)
            state.cart.counter = state.cart.cartProducts.length 
        }
    },
})

export const {addProducts,addToCart,removeFromCart} = productSlice.actions
export const selectProducts = (state)=>state.products.products
export const selectCartProducts = (state)=>state.products.cart.cartProducts
export const selectCartCounter = (state)=>state.products.cart.counter

export default productSlice.reducer;

