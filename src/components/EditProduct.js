import React from "react";
import { Input } from "../components/Login/Input";
import axios from "axios";

export class EditProduct extends React.Component{
    
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
        const token = localStorage.getItem('user');
        const axiosToken = axios.create({
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        axiosToken.put('http://127.0.0.1:8080/api/v1/products/' + this.props.match.params.id, this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                <h2>Edit Product</h2>
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
                <button onClick={this.SubmitProduct}>EDIT PRODUCT</button>
            </div>
        )
    }
}
