import React from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../actions/ProductActions";
import { Header } from "./Header";

export class Expenses extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            month:"",
            year:""
        }
    }

    componentDidMount(){
        this.props.FetchProducts();
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    TotalPrice = () => {
        var totalPrice = 0;
        this.props.products.forEach(product => totalPrice += product.price);
        return totalPrice;
      }

    render() {
        return(
            <div id='table'>
                <div id="head">
                <Header />
                <div><span>{localStorage.getItem('username')} {localStorage.getItem('lastname')}</span></div>
                </div>
                <div id='table-wrap'>
                <h2>Expenses</h2>
                <div id="dan">
                    <span>Select Month and Year</span>
                <select name="month" value={this.state.month} onChange={this.handleOnChange}>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
                </select>
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
                </div>    
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
                    {this.props.products.filter(el => {
                        let d = new Date(el.purchase_date);
                        return d.getFullYear() === parseInt(this.state.year) && d.getMonth() === parseInt(this.state.month);
                    })
                    .map(product =>{
                        return(
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.description}</td>
                            <td>{new Date(product.purchase_date).toISOString().substring(0, 10)}</td>
                            <td>{product.price}</td>        
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : <h2>Loading Products</h2> }
               
            </div>
            <h1>Total spent : {this.TotalPrice()} den.</h1>
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