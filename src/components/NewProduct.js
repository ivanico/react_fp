import React from "react";
import { connect } from "react-redux";
import { CreateProduct } from "../actions/ProductActions";
import { Input } from "../components/Login/Input";
import axios from "axios";

export class NewProduct extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                description: '',
                type: '',
                purchase_date: '',
                price:'',
        }
    }

    InputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    SubmitProduct = () => {
        this.props.CreateProduct(this.state);
    //     const token = localStorage.getItem('user');
    //     const axiosToken = axios.create({
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     axiosToken.post('http://127.0.0.1:8080/api/v1/products', this.state)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    }

    render() {
        return(
            <div>
                <h2>New Product</h2>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="name"
                    type="text"
                    placeholder="Product Name"                
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="description"
                    type="text"
                    placeholder="Description"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="type"
                    type="text"
                    placeholder="Type"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="purchase_date"
                    type="text"
                    placeholder="Purches date"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="price"
                    type="text"
                    placeholder="Price"                  
                />
                <button onClick={this.SubmitProduct}>CREATE PRODUCT</button>
            </div>
        )
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        CreateProduct: (product) => {
            dispatch(CreateProduct(product));
        }
    }
}

const MapStateToProps = () => {
    return {}
}

NewProduct = connect(MapStateToProps,MapDispatchToProps)(NewProduct);