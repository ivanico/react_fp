import React from "react";
import { connect } from "react-redux";
import { CreateProduct } from "../actions/ProductActions";
import { Input } from "../components/Login/Input";


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
        this.props.history.push('/product');
    }

    render() {
        return(
            <div id="new-product">
                <h2>New Product</h2>
                <div className="column-wrapper">
                <div className="col1">
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
                    type="date"
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
            <div className="col2">
                <div>
                    <i className="fa fa-plus-circle"></i>
                    <span>You are creating a new product</span>
                </div>
            </div>
            </div>
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