import React from 'react';
import { connect } from "react-redux";

export class Product extends React.Component {

    render() {
        return(
            <div>
                <h2>Products</h2>
                {/* {this.props.products.length > 0 ?
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
                </table> : <h2>Loading Products</h2> } */}
            </div>
        )
    }
}

// const MapStateToProps = (state) => {
//     return{
//         products: state.ProductReducer.products,
//         productsError: state.ProductReducer.error
//     };
// }

// Product = connect(MapStateToProps, null)(Product);