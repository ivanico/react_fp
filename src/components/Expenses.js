import React from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";
import { Header } from "./Header";

export class Expenses extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            month:"",
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            totalPrice: undefined,
            year:""
        }
    }

    componentDidMount(){
        this.props.FetchProducts();
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    totalPrice = () => {
        var totalPrice = 0
        for(let i = 0; i < this.props.products.length; i++){
            totalPrice += this.props.products[i].price
        }
        this.setState({totalPrice : totalPrice})
    }
    
    render() {
        return(
            <div>
                <Header />
                <h2>Expenses</h2>
                <button>MONTHLY</button>
                <select name="month" value={this.state.month} onChange={this.handleOnChange}>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
                <button>YEARLY</button>
                <select name="year" value={this.state.year} onChange={this.handleOnChange}>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
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