import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {AddItem} from '../../redux/cart/cartActions'
import './Store.css'

const Store = ({ products, productsLoading, productsError, AddItem }) => {

    if (productsLoading) {
        return <div className="text-center container">
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    }
    if (productsError) {
        return <div className="text-center text-danger">Error :( {productsError.message}</div>
    }
    return products.length > 0 ? (
        <div>
            <main>
                <div className="container mt-5">
                    <div className="text-center">
                        <h1>STORE</h1>
                        <p>This is a Store page</p>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="py-4">10 Products</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search product"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row product-grid">
                        {
                            products.map(product => (
                                <div key={product.id} className="card" >
                                    <img className=" img-fluid" src={product.img} alt="Card  cap" />
                                    <div className="card-body">
                                        <p className="card-text">{product.name}</p>
                                        <h3 className="card-title">${product.price}</h3>
                                        <div className="text-right card-links">
                                            <Link to={`/products/${product.id}`} className="btn btn-link btn-sm mr-2">Details</Link>
                                            <button id="add-button" onClick={() => AddItem(product.id)} className="btn  btn-sm">Add to card</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>    
                </div>
            </main>
        </div>
    ) : (
            <h1>Store is empty</h1>
    )
}

const mapState = state => ({
    products: state.products.products,
    productsLoading: state.products.productsLoading,
    productsError: state.products.productsError
})

export default connect(mapState, {AddItem})(Store)
