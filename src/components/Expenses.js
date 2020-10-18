import React from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";

export class Expenses extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            totalPrice: undefined
        }
    }
    totalPrice = () => {
        var totalPrice = 0
        for(let i = 0; i < this.props.products.length; i++){
            totalPrice += this.props.products[i].price
        }
        this.setState({totalPrice : totalPrice})
    }
    componentDidMount(){
        this.props.FetchProducts();
    }

    render() {
        return(
            <div>
                <h2>Expenses</h2>
                <button>MONTHLY</button>
                <button>YEARLY</button>
                <button onClick={this.totalPrice}>TOTAL</button>
    
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
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>Loading Products</h2> }
                <h1>Total spent : {this.state.totalPrice} den.</h1>
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

Expenses = connect(MapStateToProps,MapDispatchToProps)(Expenses);