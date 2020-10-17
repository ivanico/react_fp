import React from 'react';
import { connect } from "react-redux";
import { FetchProducts, FetchProductError} from "../actions/ProductActions";
import axios from "axios";



export class Product extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          product: []
        }
      }


    componentDidMount(){
        this.props.FetchProducts();
    }
    
    test = () => {
        console.log(this.props.products);
    }

    DeleteProduct = () => {
        return dispatch => {
            const api = `http://127.0.0.1:8080/api/v1/products/` + this.state.product._id;
            const token = localStorage.getItem('user');
            const axiosToken = axios.create({
                baseURL: api,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            axiosToken.delete()
            .then(res => {this.setState({product: ''});
            this.props.FetchProducts()})
            .catch(err =>dispatch(FetchProductError(err)))
        }
    }

    render() {
        return(
            <div>
                <h2>Products</h2>

                {this.props.products.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product =>{
                        return(
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.description}</td>
                            <td>{product.purchase_date}</td>
                            <td>{product.price}</td>  
                            <td><button>edit</button></td>
                            <td><button onClick={this.DeleteProduct()}>delete{product._id}</button></td>      
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>Loading Products</h2> }
                <button onClick={this.test}>New product</button>
            </div>
        )
    }
}


const MapStateToProps = (state) => {
    return {
        products: state.ProductReducer.products,
        productsError: state.ProductReducer.error
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        FetchProducts: () => {
            dispatch(FetchProducts());
        }
    }
}



Product = connect(MapStateToProps,MapDispatchToProps)(Product);