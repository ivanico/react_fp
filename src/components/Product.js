import React from 'react';
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";
import axios from "axios";



export class Product extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            ChosenProductID : ""
        }
      }


    componentDidMount(){
        this.props.FetchProducts();
    }
    
    test = () => {
        console.log(this.props.products);
    }

    DeleteProduct = (id) => {
        const api = 'http://127.0.0.1:8080/api/v1/products';
        const token = localStorage.getItem('user');
        const axiosToken = axios.create({
            baseURL: api,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        axiosToken.delete(id)
            .then(res => this.setState({ChosenProductID : id}))
            .catch(err => console.log(err))
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
                            <td><button onClick={() => this.DeleteProduct(product._id)}>delete</button></td>      
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