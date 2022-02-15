import {useContext} from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const ctx = useContext(CartContext);
    const hasItem = ctx.items.length > 0;
    
    const cartItemAddHandler = (item) => {
        ctx.addItem({...item, amount:1});
    };
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };
    
    const cartItems = (
    <ul className={classes['cart-items']}>
        {ctx.items
        .map((item)=>(  
        <CartItem 
        id={props.id}
        name={item.name} 
        price={item.price} 
        amount = {item.amount}
        onAdd = {cartItemAddHandler.bind(null, item)}
        onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        />
        ))}
    </ul>
    );

    return (
        <Modal onConfirmHide = {props.onConfirmHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onConfirmHide}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;