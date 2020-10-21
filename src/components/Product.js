import React from 'react';
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import axios from "axios";
import { Header } from './Header';



export class Product extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            ChosenProductID : "",
            select: "",
            popupDelete: true
        }
      }


    componentDidMount(){
        this.props.FetchProducts();
    }
    
    popupDeleteModal = () => {
        this.setState({
            popupDelete: !this.state.popupDelete
        })
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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <div>
                <Header />
                <div><span>{localStorage.getItem('username', 'lastname')}</span></div>
                <h2>Products</h2>
                <select name="select" onChange={this.handleOnChange}>
                    <option value="latest-purchases">Latest Purchases</option>
                    <option value="highest-price">Highest Price</option>
                    <option value="lowest-price">Lowest Price</option>
                </select>

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
                            <td><Link to={"/editproduct/" + product._id}><button><i className="fa fa-edit"></i></button></Link></td>
                            <td><button onClick={() => this.DeleteProduct(product._id)}><i className="fa fa-trash"></i></button></td>      
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>Loading Products</h2> }
                <Link to="/createproduct"><button>New product</button></Link>
                <button onClick={() => this.popupDeleteModal}></button>
                <DeleteModal open={this.state.popupDelete}>
                    <h2>Delete Product</h2>
                    <span>You are about to delete this product. Are you sure tou wish to continue?</span>
                </DeleteModal>
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