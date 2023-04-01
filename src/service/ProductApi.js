import axios from 'axios';
import React, { Component } from 'react';

class ProductApi extends Component{

    static fetchProducts(){
        return axios.post("http://3.7.252.58:4001/product/getAllProduct","",'Content-Type: application/json')
    }
}

export default ProductApi;