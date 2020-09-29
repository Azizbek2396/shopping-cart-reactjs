import React from 'react';
import { connect } from 'react-redux';
import { AddItem, RemoveItem } from '../../redux/cart/cartActions'
import './Cart.css'

function Cart({ items, products, AddItem, RemoveItem }) {
    const cartList = products.filter(product => items.some(i => i.id === product.id));

    return (
        <div>
            <div className="text-center mt-5">
                <h2>Cart</h2>
                <p>This is a Cart page</p>
            </div>
            <div className="container">
                {
                    items.length > 0 ? (
                        <div className="row justify-content-center">
                            <div className="col-sm-9 p-3">
                                <div>
                                    <div className="cart no-gutters border-0">
                                        {
                                            cartList.map(cart => (
                                                <div className="row py-2" key={cart.id}>
                                                    <div className="col-sm-2 p-2">
                                                        <img src={cart.img} alt={cart.name} className="img-fluid d-block cart-img" />
                                                    </div>
                                                    <div className="col-sm-4 p-2">
                                                        <h5 className="mb-1">{cart.name}</h5>
                                                        <p className="mb-1">{cart.price}</p>
                                                    </div>
                                                    <div className="col-sm-2 p-2 text-center">
                                                        <p className="mb-0">Qty: {items.find(i => i.id === cart.id).count}</p>
                                                    </div>
                                                    <div className="col-sm-4 p-2 text-right">
                                                        <button onClick={() => AddItem(cart.id)} className="btn btn-primary plus-button btn-sm mr-2 mb-1">
                                                            <svg className="svg-circleplus" viewBox="0 0 100 100">
                                                                <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
                                                                <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => RemoveItem(cart.id)} className="btn mines-button btn-sm btn-danger mb-1">
                                                            <svg className="svg-circleplus" viewBox="0 0 100 100">
                                                                <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 p-3">
                                {
                                    cartList.length > 0 && <div className="card card-body p-4">
                                        <p className="mb-1">Total Items</p>
                                        <h4 className="mb-3">{items.reduce((s, i) => s + i.count, 0)}</h4>
                                        <p className="mb-1">Total Payment</p>
                                        <h3 className="m-0">${items.reduce((s, i) => s + i.count * products.find(p => p.id === i.id).price, 0)}</h3>
                                        <hr className="my-4" />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mb-2">CHECKOUT</button>
                                            <button type="button" className="btn btn-outlineprimary btn-sm">CLEAR</button>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    ) : (
                            <div className="p-3 text-center text-muted">Your cart is empty</div>
                    )  
                }
            </div>
        </div>
    )
}

const mapState = state => ({
    items: state.items.items,
    products: state.products.products
})

export default connect(mapState, {AddItem, RemoveItem})(Cart);
