import React from 'react';
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Header } from './Header';
import PopUp from "./PopUp";



export class Product extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            seen: false,
            ChosenProductID : "",
            direction: {
                price: 'asc',
                purchase_date: 'asc'
            }  
        }
      }

    componentDidMount(){
        this.props.FetchProducts();
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
            .then(res => {this.setState({seen: false})
            this.props.FetchProducts();
        })
            .catch(err => console.log(err))
    }

    togglePop = () => {
        this.setState({
         seen: !this.state.seen
        });
       };

    DelProduct = (id) => {
        this.setState({
            ChosenProductID: id
        })
    }
          
    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    SortByPrice(p) {
        this.setState({
            products: this.props.products.sort( (a, b) => ( 
                this.state.direction[p] === 'asc'
                ? (a[p]) - (b[p])
                : (b[p]) - (a[p])
                )),
            direction: {
                [p]: this.state.direction[p] === 'asc'
                ? 'desc'
                : 'asc'
            }   
        })
    }

    SortByDate(d) {
        this.setState({
            product: this.props.products.sort( (a, b) => (
                this.state.direction[d] === 'asc'
                ? Date.parse(a[d]) - Date.parse(b[d])
                : Date.parse(b[d]) - Date.parse(a[d])
            )),
            direction: {
                [d]: this.state.direction[d] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    render() {
        return(
            <div id='table'>
                <div id="head">
                <Header />
                <div><span>{localStorage.getItem('username')}  {localStorage.getItem('lastname')}</span>
                </div>
            </div>
            <div id='table-wrap'>
                <h2>Products</h2>
                {this.props.products.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th><button onClick={() => this.SortByDate("purchase_date")}>Purchase Date</button></th>
                            <th><button onClick={() => this.SortByPrice("price")}>Price</button></th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product =>{
                        return(
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.description}</td>
                            <td>{new Date(product.purchase_date).toISOString().substring(0, 10)}</td>
                            <td>{product.price}</td>  
                            <td>
                            <Link to={"/editproduct/" + product._id}><button><i className="fa fa-edit"></i></button></Link>
                            <button onClick={()=>{this.togglePop();this.DelProduct(product._id)}}> <i className="fa fa-trash"></i></button>
                            </td>
                                 
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>Loading Products</h2> }
                {this.state.seen ? <PopUp 
                delete={()=>this.DeleteProduct(this.state.ChosenProductID)} 
                toggle={this.togglePop} 
                /> : null}
                <div id='newp-btn'><Link to="/createproduct"><button>New product</button></Link></div>
            </div>
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